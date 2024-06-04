package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "package_destination")
public class PackageDestination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "package_id", nullable = false)
    private Package tripPackage;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

}