package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class PackageDTO implements Serializable {
    private Integer id;
    private String name;
    private String description;
    private double basePrice;
    private String state;

    public PackageDTO(Integer id, String name, String description, double basePrice, String state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.state = state;
    }

    public PackageDTO(String name){
        this.name = name;
    }
}
