package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "reservation")
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "number_of_people")
    private Integer numberOfPeople;

    @Column(name = "number_of_days")
    private Integer numberOfDays;

    @Column(name = "medical_insurance", columnDefinition = "char(1)")
    private String medicalInsurance;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Client user;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    @ManyToOne
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    @ManyToOne
    @JoinColumn(name = "lodging_id")
    private Lodging lodging;

    @ManyToOne
    @JoinColumn(name = "transportation_id")
    private Transportation transportation;

    @Column(name = "price", nullable = false)
    private Integer price;

    @ManyToOne
    @JoinColumn(name = "meal_id")
    private Meal meal;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;
    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

}
