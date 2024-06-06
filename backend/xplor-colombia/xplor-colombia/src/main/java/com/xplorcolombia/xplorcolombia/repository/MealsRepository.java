package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MealsRepository extends JpaRepository<Meals,Integer> {

    //@Query(nativeQuery = true)
    //public List<MealsDTO> seeMeals();

    @Query(nativeQuery = true)
    public List<MealsDTO> seeMealbyDestination(@Param("pDest") Integer idDestination);

    @Query(nativeQuery = true)
    public MealsDTO seeMealsPerTripDestination(@Param("pId") Integer idDestination);

}
