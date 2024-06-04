package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class AccommodationDTO implements Serializable {
    private Integer id;
    private String name;
    private double price;
    private String state;
    private Integer destinationId;
    private String lodging;

    public AccommodationDTO(Integer id, String name, double price, String lodging) {
        this.id = id;
        this.name = lodging +" - "+ name;
        this.price = price;
    }

    public AccommodationDTO(Integer id, String name, double price, String state, Integer destinationId, String lodging) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.state = state;
        this.destinationId = destinationId;
        this.lodging = lodging;
    }

    public AccommodationDTO(String name){
        this.name = name;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

