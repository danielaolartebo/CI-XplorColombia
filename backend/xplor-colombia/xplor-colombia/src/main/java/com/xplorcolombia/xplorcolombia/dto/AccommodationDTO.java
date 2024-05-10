package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class AccommodationDTO implements Serializable {
    private Integer id;
    private String name;
    private Integer destinationId;
    private Integer price;
    private String state;

    public AccommodationDTO(String name){
        this.name = name;
    }
}

