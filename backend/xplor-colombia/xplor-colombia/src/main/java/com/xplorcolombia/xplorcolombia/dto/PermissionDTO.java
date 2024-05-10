package com.xplorcolombia.xplorcolombia.dto;


import com.xplorcolombia.xplorcolombia.domain.Role;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;

public class PermissionDTO implements Serializable {

    private Integer id;

    private String name;

    private Role role;

    private String state;


}
