package com.xplorcolombia.xplorcolombia.domain;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "destination_meal")
public class DestinationMeal {

    @Id
    @Column(name = "destination_id")
    private Long destinationId;

    @Id
    @Column(name = "meal_id")
    private Long mealId;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false, insertable = false, updatable = false)
    private Destination destination;

    @ManyToOne
    @JoinColumn(name = "meal_id", nullable = false, insertable = false, updatable = false)
    private Meal meal;

}
