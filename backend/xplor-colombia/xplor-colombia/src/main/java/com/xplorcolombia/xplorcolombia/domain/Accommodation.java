package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Accommodation.seeAccommodationbyDestination", query="", resultSetMapping = "seeAccommodationbyDestination")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeAccommodationbyDestination",
                classes = {
                        @ConstructorResult(
                                targetClass = AccommodationDTO.class,
                                columns = {
                                        @ColumnResult(name = "id", type = Integer.class),
                                        @ColumnResult(name = "name", type = String.class),
                                        @ColumnResult(name = "price", type = Double.class),
                                        @ColumnResult(name = "lodging", type = String.class)
                                }
                        )
                })
})

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

    @Column(name = "price", nullable = false, columnDefinition = "numeric(10,2)")
    private double price;

    @Column(name = "state", nullable = false, columnDefinition = "char(1)")
    private String state;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    @Column(name = "lodging", nullable = false, columnDefinition = "varchar(100)")
    private String lodging;

    public Accommodation(String name, double price, String state, Destination destination, String lodging) {
        this.name = name;
        this.price = price;
        this.state = state;
        this.destination = destination;
        this.lodging = lodging;
    }

    public Accommodation() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public String getLodging() {
        return lodging;
    }

    public void setLodging(String lodging) {
        this.lodging = lodging;
    }
}
