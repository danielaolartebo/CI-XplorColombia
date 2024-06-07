package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;

public class CustomerDTO implements Serializable {

    private Integer id;
    private String name;
    private String email;
    private Integer nit;
    private String state;

    public CustomerDTO() {
    }

    public CustomerDTO(Integer id, String name, String email, Integer nit, String state) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}


