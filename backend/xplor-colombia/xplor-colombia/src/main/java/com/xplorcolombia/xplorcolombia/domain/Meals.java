package com.xplorcolombia.xplorcolombia.domain;

import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;


@NamedNativeQueries({
        @NamedNativeQuery(name="Meals.seeMealbyDestination",
                query="",
                resultSetMapping = "seeMealbyDestination"),
        @NamedNativeQuery(name="Meals.seeMealsPerTripDestination",
                query="",
                resultSetMapping = "seeMealsPerTripDestination")
})


@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeMealbyDestination",
                classes = {
                        @ConstructorResult(
                                targetClass = MealsDTO.class,
                                columns = {
                                        @ColumnResult(name = "id", type = Integer.class),
                                        @ColumnResult(name = "type", type = String.class),
                                        @ColumnResult(name = "price", type = Double.class)
                                }
                        )
                }),
        @SqlResultSetMapping(name="seeMealsPerTripDestination",
                classes = {
                        @ConstructorResult(
                                targetClass = MealsDTO.class,
                                columns = {
                                        @ColumnResult(name = "type", type = String.class)
                                }
                        )
                })
})


@Data
@Entity
@Table(name = "meals")
public class Meals implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "type", nullable = false, columnDefinition = "varchar(100)")
    private String type;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "state", columnDefinition = "char(1)")
    private String state;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    public Meals(Integer id, double price, String state, String type) {
        this.id = id;
        this.price = price;
        this.state = state;
        this.type = type;
    }

    public Meals() {}

    public Meals(String type, double price, String state, Destination destination) {
        this.type = type;
        this.price = price;
        this.state = state;
        this.destination = destination;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
