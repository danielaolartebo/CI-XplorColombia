package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "trip")
public class Trip implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "num_people", nullable = false)
    private int numPeople;

    @ManyToOne
    @JoinColumn(name = "package_id", nullable = false)
    private Package tripPackage;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;

    @Column(name = "start_trip_date", nullable = false)
    private Date startTripDate;

    @Column(name = "end_trip_date", nullable = false)
    private Date endTripDate;

}