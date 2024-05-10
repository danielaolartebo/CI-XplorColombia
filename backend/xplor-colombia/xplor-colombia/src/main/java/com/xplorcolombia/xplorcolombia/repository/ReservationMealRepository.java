package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.ReservationMeal;
import com.xplorcolombia.xplorcolombia.dto.ReservationMealDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationMealRepository extends JpaRepository<ReservationMeal,ReservationMeal.CompusedId> {

    @Query(nativeQuery = true)
    public List<ReservationMealDTO> mealForReservation(@Param(":pClientId") Integer clientId, @Param(":pDest") String destination);
}
