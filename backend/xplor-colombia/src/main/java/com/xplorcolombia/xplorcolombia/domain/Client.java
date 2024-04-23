package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "client")
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "email", nullable = false, columnDefinition = "varchar(100)",unique = true)
    private String email;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;
    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

}
