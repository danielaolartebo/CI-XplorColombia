package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class DestinationServiceImpl implements DestinationService {
    @Override
    public List<Destination> findAll() {
        return null;
    }

    @Override
    public Optional<Destination> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Destination save(Destination entity) throws Exception {
        return null;
    }

    @Override
    public Destination update(Destination entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Destination entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Destination entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}