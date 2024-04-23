package com.xplorcolombia.xplorcolombia.service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class TransportationServiceImpl implements TransportationService {
    @Override
    public List<TransportationService> findAll() {
        return null;
    }

    @Override
    public Optional<TransportationService> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public TransportationService save(TransportationService entity) throws Exception {
        return null;
    }

    @Override
    public TransportationService update(TransportationService entity) throws Exception {
        return null;
    }

    @Override
    public void delete(TransportationService entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(TransportationService entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}