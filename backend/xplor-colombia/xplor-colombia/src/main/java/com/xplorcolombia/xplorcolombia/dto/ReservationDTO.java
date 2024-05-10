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
    private Integer price;
    private String state;

    public ReservationDTO(Integer numberOfPeople, Integer numberOfDays, String medicalInsurance, Integer price){
        this.numberOfDays = numberOfDays;
        this.numberOfPeople = numberOfPeople;
        this.medicalInsurance = medicalInsurance;
        this.price = price;
    }
}
