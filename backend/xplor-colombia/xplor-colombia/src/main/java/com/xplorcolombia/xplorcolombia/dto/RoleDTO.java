package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;

public class RoleDTO implements Serializable {

    private Integer id;
    private String name;
    private String state;

    public RoleDTO(Integer id, String name, String state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
}
