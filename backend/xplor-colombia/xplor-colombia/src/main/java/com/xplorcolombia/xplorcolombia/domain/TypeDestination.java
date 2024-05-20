package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "type_destination")
public class TypeDestination implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "type", nullable = false, columnDefinition = "varchar(100)")
    private String type;

    @ManyToOne
    @JoinColumn(name = "destination_id")
    private Destination destination;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

}
