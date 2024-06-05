package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class AccommodationDTO implements Serializable {
    private Integer id;
    private String name;
    private Integer price;
    private String state;
    private Integer destinationId;
    private String lodging;

    public AccommodationDTO(String name){
        this.name = name;
    }

    public AccommodationDTO(Integer id, String name, Integer price, String state, Integer destinationId, String lodging) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.state = state;
        this.destinationId = destinationId;
        this.lodging = lodging;
    }
}

