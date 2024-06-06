package com.xplorcolombia.xplorcolombia.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class ReportDTO {

    @JsonProperty("id")
    private String nameCustomer;

    @JsonProperty("id")
    private String id;

    @JsonProperty("id")
    private String email;

    @JsonProperty("id")
    private String destination;

    @JsonProperty("id")
    private Date startDate;

    @JsonProperty("id")
    private Date endDate;

    @JsonProperty("id")
    private int num_people;

    @JsonProperty("id")
    private String accommodation;

    @JsonProperty("id")
    private String meal;

    @JsonProperty("id")
    private String transportation;

    @JsonProperty("id")
    private String insurance;


}
