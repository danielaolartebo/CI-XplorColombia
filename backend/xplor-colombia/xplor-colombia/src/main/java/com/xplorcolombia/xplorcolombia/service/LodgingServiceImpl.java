package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Lodging;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class LodgingServiceImpl implements LodgingService {
    @Override
    public List<Lodging> findAll() {
        return null;
    }

    @Override
    public Optional<Lodging> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Lodging save(Lodging entity) throws Exception {
        return null;
    }

    @Override
    public Lodging update(Lodging entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Lodging entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Lodging entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}