package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.criteria.CriteriaBuilder;

import java.io.Serializable;

public class TripInsuranceDTO implements Serializable {

    private Integer id;
    private String type;
    private double price;
    private String state;
    private Integer destinationId;

    public TripInsuranceDTO(Integer id, String type, double price) {
        this.id = id;
        this.type = type;
        this.price = price;
    }

    public TripInsuranceDTO(Integer id, String type, double price, String state, Integer destinationId) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.state = state;
        this.destinationId = destinationId;
    }

    public TripInsuranceDTO(String type) {
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
