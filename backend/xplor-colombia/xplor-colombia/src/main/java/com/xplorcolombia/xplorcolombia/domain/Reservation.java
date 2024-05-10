package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "reservation")
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "number_of_people")
    private Integer numberOfPeople;

    @Column(name = "number_of_days")
    private Integer numberOfDays;

    @Column(name = "medical_insurance", columnDefinition = "char(1)")
    private String medicalInsurance;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Client user;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;

}
