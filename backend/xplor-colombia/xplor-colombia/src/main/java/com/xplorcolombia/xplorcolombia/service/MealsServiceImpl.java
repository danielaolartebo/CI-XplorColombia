package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.repository.MealsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class MealsServiceImpl implements MealsService {

    @Autowired
    private MealsRepository mealsRepository;

    @Override
    public List<Meals> findAll() {
        return mealsRepository.findAll();
    }

    @Override
    public Optional<Meals> findById(Integer integer) {

        return mealsRepository.findById(integer);
    }

    @Override
    public Meals save(Meals entity) throws Exception {
        return mealsRepository.save(entity);
    }

    @Override
    public Meals update(Meals entity) throws Exception {
        return mealsRepository.save(entity);
    }

    @Override
    public void delete(Meals entity) throws Exception {
        mealsRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        mealsRepository.deleteById(integer);
    }

    @Override
    public void validate(Meals entity) throws Exception {

    }

    @Override
    public Long count() {
        return mealsRepository.count();
    }


    @Override
    public List<MealsDTO> seeMeals() {
        return List.of();
    }
}