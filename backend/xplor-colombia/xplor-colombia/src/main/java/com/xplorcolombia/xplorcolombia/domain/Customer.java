package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
@NamedNativeQueries({
        @NamedNativeQuery(name="Customer.seeCustomer",
                query="",
                resultSetMapping = "seeCustomer")

})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeCustomer",
                classes = {@ConstructorResult(targetClass = CustomerDTO.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class),
                                @ColumnResult(name = "email", type = String.class),
                                @ColumnResult(name = "name", type = String.class),
                                @ColumnResult(name = "nit", type = String.class)
                        }
                )
                })
})

@Data
@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "email", nullable = false, columnDefinition = "varchar(100)",unique = true)
    private String email;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "nit", nullable = false)
    private Integer nit;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

}
