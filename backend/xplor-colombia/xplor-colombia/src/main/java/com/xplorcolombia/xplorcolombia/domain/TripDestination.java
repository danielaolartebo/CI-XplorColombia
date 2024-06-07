package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "trip_destination")
public class TripDestination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;

    @Column(name = "num_people", nullable = false)
    private int numPeople;

    @ManyToOne
    @JoinColumn(name = "transportation_id", nullable = false)
    private Transportation trasnportation;

    @ManyToOne
    @JoinColumn(name = "accommodation_id", nullable = false)
    private Accommodation accommodation;

    @ManyToOne
    @JoinColumn(name = "meals_id", nullable = false)
    private Meals meals;

    @ManyToOne
    @JoinColumn(name = "trip_insurance_id", nullable = false)
    private TripInsurance tripInsurance;

    @Column(name = "both_transportation", nullable = false)
    private boolean bothTransportation;

    public TripDestination() {
    }

    public TripDestination(Trip trip, Destination destination, Date startDate, Date endDate, int numPeople, Transportation trasnportation, Accommodation accommodation, Meals meals, TripInsurance tripInsurance, boolean bothTransportation) {
        this.trip = trip;
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numPeople = numPeople;
        this.trasnportation = trasnportation;
        this.accommodation = accommodation;
        this.meals = meals;
        this.tripInsurance = tripInsurance;
        this.bothTransportation = bothTransportation;
    }


}
