package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meal;
import com.xplorcolombia.xplorcolombia.dto.MealDTO;
import com.xplorcolombia.xplorcolombia.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class MealServiceImpl implements MealService {

    @Autowired
    private MealRepository mealRepository;

    @Override
    public List<Meal> findAll() {
        return mealRepository.findAll();
    }

    @Override
    public Optional<Meal> findById(Integer integer) {

        return mealRepository.findById(integer);
    }

    @Override
    public Meal save(Meal entity) throws Exception {
        return mealRepository.save(entity);
    }

    @Override
    public Meal update(Meal entity) throws Exception {
        return mealRepository.save(entity);
    }

    @Override
    public void delete(Meal entity) throws Exception {
        mealRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        mealRepository.deleteById(integer);
    }

    @Override
    public void validate(Meal entity) throws Exception {

    }

    @Override
    public Long count() {
        return mealRepository.count();
    }

    @Override
    public List<MealDTO> seeMeals() {
        return mealRepository.seeMeals();
    }
}