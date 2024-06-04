package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Destination.seeDestinations",query="",resultSetMapping = "seeDestinations"),
        @NamedNativeQuery(name="Destination.seeDestinationId",query="",resultSetMapping = "seeDestinations"),
        @NamedNativeQuery(name="Destination.seeDestinationsPerPackage",query="",resultSetMapping = "seeDestinationsPerPackage"),
        @NamedNativeQuery(name="Destination.destinationForReservation",query="",resultSetMapping = "destinationForReservation")
})
@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeDestinations",
                classes = {@ConstructorResult(targetClass = DestinationDTO.class,
                                columns = {
                                        @ColumnResult(name = "id", type = Integer.class),
                                        @ColumnResult(name = "nameD", type = String.class)
                                }
                        )
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

    @Column(name = "base_price", nullable = false)
    private double basePrice;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

    @Column(name = "description", columnDefinition = "char(1000)")
    private String description;

}
