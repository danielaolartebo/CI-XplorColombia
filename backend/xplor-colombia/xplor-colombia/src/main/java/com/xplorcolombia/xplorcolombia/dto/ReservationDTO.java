package com.xplorcolombia.xplorcolombia.dto;

import com.xplorcolombia.xplorcolombia.domain.*;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ReservationDTO {
    private Integer id;
    private Integer numberOfPeople;
    private Integer numberOfDays;
    private String medicalInsurance;
    private Client user;
    private Destination destination;
    private Accommodation accommodation;
    private Lodging lodging;
    private Transportation transportation;
    private Integer price;
    private Meal meal;
    private String state;
}
