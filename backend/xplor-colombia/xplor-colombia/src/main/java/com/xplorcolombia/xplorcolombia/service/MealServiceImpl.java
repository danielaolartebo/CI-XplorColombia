package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meal;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class MealServiceImpl implements MealService {
    @Override
    public List<Meal> findAll() {
        return null;
    }

    @Override
    public Optional<Meal> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Meal save(Meal entity) throws Exception {
        return null;
    }

    @Override
    public Meal update(Meal entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Meal entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Meal entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}