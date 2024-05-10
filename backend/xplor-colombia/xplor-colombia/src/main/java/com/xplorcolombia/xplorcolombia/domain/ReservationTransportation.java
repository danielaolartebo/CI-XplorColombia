package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
@Data
@Entity
@Table(name = "reservation_transportation")
public class ReservationTransportation {

    @EmbeddedId
    CompusedId compusedId;

    /*@Id
    @Column(name = "reservation_id")
    private Long reservationId;*/

    /*@Id
    @Column(name = "transportation_id")
    private Long transportationId;*/

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false, insertable = false, updatable = false)
    private Reservation reservation;

    @ManyToOne
    @JoinColumn(name = "transportation_id", nullable = false, insertable = false, updatable = false)
    private Transportation transportation;

    public static class CompusedId implements Serializable {

        @Column(name = "reservation_id")
        private Long reservationId;

        @Column(name = "transportation_id")
        private Long transportationId;


    }
}
