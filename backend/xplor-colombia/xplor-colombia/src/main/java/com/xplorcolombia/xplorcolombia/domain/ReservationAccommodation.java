package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "reservation_accommodation")
public class ReservationAccommodation {

    @EmbeddedId
    CompusedId compusedId;
    //@Id
    //@Column(name = "reservation_id")
    //private Long reservationId;

    //@Id
    //@Column(name = "accommodation_id")
    //private Long accommodationId;

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false, insertable = false, updatable = false)
    private Reservation reservation;

    @ManyToOne
    @JoinColumn(name = "accommodation_id", nullable = false, insertable = false, updatable = false)
    private Destination accommodation;

    public static class CompusedId implements Serializable{

        @Column(name = "reservation_id")
        private Long reservationId;

        @Column(name = "accommodation_id")
        private Long accommodationId;


    }
}
