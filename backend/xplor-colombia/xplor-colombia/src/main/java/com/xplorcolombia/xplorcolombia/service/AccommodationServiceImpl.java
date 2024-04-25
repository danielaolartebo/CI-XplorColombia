package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class AccommodationServiceImpl implements AccommodationService {
    @Override
    public List<Accommodation> findAll() {
        return null;
    }

    @Override
    public Optional<Accommodation> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Accommodation save(Accommodation entity) throws Exception {
        return null;
    }

    @Override
    public Accommodation update(Accommodation entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Accommodation entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Accommodation entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}