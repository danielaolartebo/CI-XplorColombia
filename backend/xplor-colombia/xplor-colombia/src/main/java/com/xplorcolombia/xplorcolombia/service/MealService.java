package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meal;
import com.xplorcolombia.xplorcolombia.dto.MealDTO;

import java.util.List;

public interface MealService extends GenericService<Meal, Integer> {

    public List<MealDTO> seeMeals();
}