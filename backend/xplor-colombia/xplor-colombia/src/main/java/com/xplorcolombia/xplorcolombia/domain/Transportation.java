package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Transportation.seeTranportationbyDestination",
                query="",
                resultSetMapping = "seeTranportationbyDestination"),
        @NamedNativeQuery(name="Transportation.transportationForReservation",
                query="",
                resultSetMapping = "transportationForReservation")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeTranportationbyDestination",
                columns = {
                        @ColumnResult(name = "typeTp", type = String.class)
                }),
        @SqlResultSetMapping(name="transportationForReservation",
                columns = {
                        @ColumnResult(name = "type", type = String.class)
                })
})

@Data
@Entity
@Table(name = "transportation")
public class Transportation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "type", nullable = false, columnDefinition = "varchar(100)")
    private String type;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "both", nullable = false)
    private boolean both;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

}
