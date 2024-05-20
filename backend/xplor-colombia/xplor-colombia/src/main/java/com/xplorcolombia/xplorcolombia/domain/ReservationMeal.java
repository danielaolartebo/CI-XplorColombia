package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "reservation_meal")
public class ReservationMeal {

    @EmbeddedId
    CompusedId compusedId;

    /*@Id
    @Column(name = "reservation_id")
    private Long reservationId;*/

    /*@Id
    @Column(name = "meal_id")
    private Long mealId;*/

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false, insertable = false, updatable = false)
    private Reservation reservation;

    @ManyToOne
    @JoinColumn(name = "meal_id", nullable = false, insertable = false, updatable = false)
    private Meal meal;

    public static class CompusedId implements Serializable {

        @Column(name = "reservation_id")
        private Long reservationId;

        @Column(name = "meal_id")
        private Long mealId;


    }
}
