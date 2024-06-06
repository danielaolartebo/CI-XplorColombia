package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;


@Data
public class TripDTO implements Serializable {

    private int id;
    private Integer customerId;
    private int numPeople;
    private Integer packageId;
    private String state;
    private Date startTripDate;
    private Date endTripDate;



    public TripDTO() {

    }

    public TripDTO(int id, Integer customerId, int numPeople, Integer packageId, String state, Date startTripDate, Date endTripDate) {
        this.id = id;
        this.customerId = customerId;
        this.numPeople = numPeople;
        this.packageId = packageId;
        this.state = state;
        this.startTripDate = startTripDate;
        this.endTripDate = endTripDate;
    }

    public TripDTO(int id, int numPeople) {
        this.id = id;
        this.numPeople = numPeople;
    }

    public TripDTO(int id) {
        this.id = id;
    }
}
