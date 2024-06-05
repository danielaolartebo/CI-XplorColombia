package com.xplorcolombia.xplorcolombia.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;


@NamedNativeQueries({
        @NamedNativeQuery(name="Meal.seeMeals",
                query="",
                resultSetMapping = "seeMeals"),
        @NamedNativeQuery(name="Meal.mealForReservation",
                query="",
                resultSetMapping = "mealForReservation"),
        @NamedNativeQuery(name="Destination.seeMealsForDestination",
                query="",
                resultSetMapping = "seeMealsForDestination")
})

@SqlResultSetMappings({
        @SqlResultSetMapping(name="seeMeals",
                columns = {
                        @ColumnResult(name = "type", type = String.class)
                }),
        @SqlResultSetMapping(name="mealForReservation",
                columns = {
                        @ColumnResult(name = "type", type = String.class)
                }),
        @SqlResultSetMapping(name="seeMealsForDestination",
                columns = {
                        @ColumnResult(name = "type", type = String.class)
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

}
