package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MealsRepository extends JpaRepository<Meals,Integer> {

    //@Query(nativeQuery = true)
    //public List<MealsDTO> seeMeals();

}
