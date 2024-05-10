package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "reservation_destination")
public class ReservationDestination {

    @EmbeddedId
    CompusedId compusedId;
    /*@Id
    @Column(name = "reservation_id")
    private Long reservationId;*/

    /*@Id
    @Column(name = "destination_id")
    private Long destinationId;*/

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false, insertable = false, updatable = false)
    private Reservation reservation;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false, insertable = false, updatable = false)
    private Destination destination;

    public static class CompusedId implements Serializable {

        @Column(name = "reservation_id")
        private Long reservationId;

        @Column(name = "destination_id")
        private Long destinationId;


    }
}
