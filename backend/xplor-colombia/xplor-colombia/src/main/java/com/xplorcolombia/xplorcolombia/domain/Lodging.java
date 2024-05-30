package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Lodging.seeHotels",
                query="",
                resultSetMapping = "seeHotels"),
        @NamedNativeQuery(name="Lodging.lodgingforReservation",
                query="",
                resultSetMapping = "lodgingforReservation")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeHotels",
                columns = {
                        @ColumnResult(name = "name", type = String.class)
                }),
        @SqlResultSetMapping(name="lodgingforReservation",
                columns = {
                        @ColumnResult(name = "name", type = String.class)
                })
})

@Data
@Entity
@Table(name = "lodging")
public class Lodging implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "destination_id", nullable = false)
    private Integer destinationId;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

}
