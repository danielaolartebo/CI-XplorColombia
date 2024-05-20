package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class ClientDTO implements Serializable {

    private Integer id;
    private String name;
    private String email;
    private String state;

    public ClientDTO(Integer id, String name, String email, String state){
        this.id = id;
        this.name = name;
        this.email = email;
        this.state = state;
    }
}


