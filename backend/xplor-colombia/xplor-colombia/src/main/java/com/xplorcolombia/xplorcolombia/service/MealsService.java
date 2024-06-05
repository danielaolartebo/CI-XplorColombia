package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;

import java.util.List;

public interface MealsService extends GenericService<Meals, Integer> {

    public List<MealsDTO> seeMeals();
}