package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "modifications")
public class Modifications implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "description", columnDefinition = "char(1000)")
    private String description;

    @Column(name = "modification", columnDefinition = "char(2000)")
    private String modification;

    @Column(name = "modification_date", columnDefinition = "char(2000)")
    private Date modificationDate;

    @ManyToOne
    @JoinColumn(name = "userag_id", nullable = false)
    private UserAG userAG;

    public Modifications() {}

    public Modifications(String description, String modification, Date modificationDate, String name, UserAG userAG) {
        this.description = description;
        this.modification = modification;
        this.modificationDate = modificationDate;
        this.name = name;
        this.userAG = userAG;
    }
}