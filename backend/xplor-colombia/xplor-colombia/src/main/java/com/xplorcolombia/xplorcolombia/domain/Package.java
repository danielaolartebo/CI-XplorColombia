package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Package.seePackages",
                query="",
                resultSetMapping = "seePackages")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seePackages",
                columns = {
                        @ColumnResult(name = "name", type = String.class),
                        @ColumnResult(name = "id", type = String.class)
                })
})

@Data
@Entity
@Table(name = "package")
public class Package implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "description", columnDefinition = "char(1000)")
    private String description;

    @Column(name = "base_price", nullable = false)
    private double basePrice;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

}
