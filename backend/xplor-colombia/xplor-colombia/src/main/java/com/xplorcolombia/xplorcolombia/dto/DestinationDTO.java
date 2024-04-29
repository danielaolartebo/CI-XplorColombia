package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class DestinationDTO implements Serializable {

    private Integer id;
    private String name;
    private String state;

    public DestinationDTO(String name){
        this.name=name;
    }
}
