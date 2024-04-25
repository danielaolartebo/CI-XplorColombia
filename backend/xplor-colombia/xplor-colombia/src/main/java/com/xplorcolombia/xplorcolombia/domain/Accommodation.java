package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "accommodation")
public class Accommodation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "destination_id", nullable = false)
    private Integer destinationId;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "state", nullable = false, columnDefinition = "char(1)")
    private String state;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

}
