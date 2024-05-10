package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Meal;
import com.xplorcolombia.xplorcolombia.dto.MealDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MealRepository extends JpaRepository<Meal,Integer> {

    @Query(nativeQuery = true)
    public List<MealDTO> seeMeals();

}
