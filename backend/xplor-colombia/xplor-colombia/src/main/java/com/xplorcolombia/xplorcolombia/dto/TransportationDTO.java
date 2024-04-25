package com.xplorcolombia.xplorcolombia.dto;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;

public class TransportationDTO implements Serializable {

    private Integer id;
    private String type;
    private Destination destination;
    private Integer price;
    private String state;
}
