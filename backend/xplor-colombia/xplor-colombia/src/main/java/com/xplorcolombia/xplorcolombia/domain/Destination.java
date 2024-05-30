package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Destination.seeDestinations",
                query="",
                resultSetMapping = "seeDestinations"),
        @NamedNativeQuery(name="Destination.seeDestinationId",
                query="",
                resultSetMapping = "seeDestinations"),
        @NamedNativeQuery(name="Destination.seeDestinationsPerPackage",
                query="",
                resultSetMapping = "seeDestinationsPerPackage"),
        @NamedNativeQuery(name="Destination.destinationForReservation",
                query="",
                resultSetMapping = "destinationForReservation")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeDestinations",
                columns = {
                        @ColumnResult(name = "nameD", type = String.class),
                        @ColumnResult(name = "idDest", type = Integer.class)
                }),
        @SqlResultSetMapping(name="seeDestinationsPerPackage",
                columns = {
                        @ColumnResult(name = "name", type = String.class)
                }),
        @SqlResultSetMapping(name="destinationForReservation",
                columns = {
                        @ColumnResult(name = "name", type = String.class)
                })
})

@Data
@Entity
@Table(name = "destination")
public class Destination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package package_id;

    @ManyToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

}
