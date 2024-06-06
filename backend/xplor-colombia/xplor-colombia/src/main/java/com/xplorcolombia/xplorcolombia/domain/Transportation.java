package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@NamedNativeQueries({
        @NamedNativeQuery(name="Transportation.seeTransportationbyDestination",
                query="",
                resultSetMapping = "seeTransportationbyDestination"),
        @NamedNativeQuery(name="Transportation.seeTransportationPerTripDestination",
                query="",
                resultSetMapping = "seeTransportationPerTripDestination")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeTransportationbyDestination",
                classes = {
                        @ConstructorResult(
                                targetClass = TransportationDTO.class,
                                columns = {
                                        @ColumnResult(name = "id", type = Integer.class),
                                        @ColumnResult(name = "name", type = String.class),
                                        @ColumnResult(name = "price", type = Double.class)
                                }
                        )
                }),
        @SqlResultSetMapping(name="seeTransportationPerTripDestination",
                classes = {
                        @ConstructorResult(
                                targetClass = TransportationDTO.class,
                                columns = {
                                        @ColumnResult(name = "name", type = String.class)
                                }
                        )
                })
})


@Data
@Entity
@Table(name = "transportation")
public class Transportation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "state", columnDefinition = "varchar(1)")
    private String state;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    public Transportation(Integer id, String name, double price, String state) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.state = state;
    }

    public Transportation() {
    }

    public Transportation(String name, double price, String state, Destination destination) {
        this.name = name;
        this.price = price;
        this.state = state;
        this.destination = destination;
    }

    public Transportation(Integer id, String name, double price, String state, Destination destination) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.state = state;
        this.destination = destination;
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
}
