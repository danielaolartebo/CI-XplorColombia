package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;

public class CustomerDTO implements Serializable {

    private Integer id;
    private String name;
    private String email;
    private Integer nit;
    private String state;

    public CustomerDTO(Integer id, String name, String email, Integer nit, String state) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.nit = nit;
        this.state = state;
    }
}


