package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class MealDTO implements Serializable {
    private Integer id;

    private String type;

    private Integer destinationId;

    private Integer price;

    private String state;

    public MealDTO(String type){
        this.type = type;
    }
}
