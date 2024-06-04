package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class DestinationDTO implements Serializable {

    private Integer id;
    private String nameD;
    private double basePrice;
    private String state;
    private int maxPeople;

    public DestinationDTO() {
    }

    public DestinationDTO(String nameD, Integer id) {
        this.nameD = nameD;
        this.id = id;
    }

    public DestinationDTO(Integer id, String nameD, double basePrice, String state, int maxPeople) {
        this.id = id;
        this.nameD = nameD;
        this.basePrice = basePrice;
        this.state = state;
        this.maxPeople = maxPeople;
    }

    public String getNameD() {
        return nameD;
    }

    public void setNameD(String nameD) {
        this.nameD = nameD;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


}