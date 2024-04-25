package com.xplorcolombia.xplorcolombia.dto;

import jakarta.persistence.Column;

import java.io.Serializable;

public class UserAGDTO implements Serializable {
    private Integer id;
    private String name;
    private String email;
    private String password;
    private String state;
}
