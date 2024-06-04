package com.xplorcolombia.xplorcolombia.dto;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;

public class TransportationDTO implements Serializable {

    private Integer id;
    private String name;
    private double price;
    private String state;
    private Integer destinationId;

    public TransportationDTO(Integer id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public TransportationDTO(Integer id, String name, double price, String state, Integer destinationId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.state = state;
        this.destinationId = destinationId;
    }

    public TransportationDTO(String name){
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
