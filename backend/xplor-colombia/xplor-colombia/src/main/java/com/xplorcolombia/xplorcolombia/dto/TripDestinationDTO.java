package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;
import java.util.Date;

public class TripDestinationDTO implements Serializable {

    private Integer id;
    private Integer tripId;
    private Integer destinationId;
    private Date startDate;
    private Date endDate;
    private int numPeople;
    private Integer transportationId;
    private Integer accommodationId;
    private Integer mealsId;
    private Integer tripInsuranceId;
    private boolean bothTransportation;

    public TripDestinationDTO(Integer id, Integer tripId, Integer destinationId, Date startDate, Date endDate, int numPeople, Integer transportationId, Integer accommodationId, Integer mealsId, Integer tripInsuranceId, boolean bothTransportation) {
        this.id = id;
        this.tripId = tripId;
        this.destinationId = destinationId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numPeople = numPeople;
        this.transportationId = transportationId;
        this.accommodationId = accommodationId;
        this.mealsId = mealsId;
        this.tripInsuranceId = tripInsuranceId;
        this.bothTransportation = bothTransportation;
    }
}
