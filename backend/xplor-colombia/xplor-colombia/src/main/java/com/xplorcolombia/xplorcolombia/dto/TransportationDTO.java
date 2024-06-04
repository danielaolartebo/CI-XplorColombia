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
    private boolean both;
    private String state;
    private Integer destinationId;


    public TransportationDTO(Integer id, String name, double price, boolean both, String state, Integer destinationId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.both = both;
        this.state = state;
        this.destinationId = destinationId;
    }

    public TransportationDTO(String name){
        this.name = name;
    }
}
