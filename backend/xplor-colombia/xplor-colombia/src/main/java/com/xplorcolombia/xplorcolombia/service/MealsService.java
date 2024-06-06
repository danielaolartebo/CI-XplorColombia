package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MealsService extends GenericService<Meals, Integer> {
    public List<MealsDTO> seeMealbyDestination(Integer idDestination);

    public MealsDTO seeMealsPerTripDestination(Integer idTripDestination);
}