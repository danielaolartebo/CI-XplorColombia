package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;

public class MealsDTO implements Serializable {

    private Integer id;
    private String type;
    private Integer price;
    private String state;
    private Integer destinationId;

    public MealsDTO(Integer id, String type, Integer price, String state, Integer destinationId) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.state = state;
        this.destinationId = destinationId;
    }

    public MealsDTO(String type){
        this.type = type;
    }
}
