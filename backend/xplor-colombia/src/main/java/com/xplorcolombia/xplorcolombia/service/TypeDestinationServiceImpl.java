package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.TypeDestination;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class TypeDestinationServiceImpl implements TypeDestinationService {
    @Override
    public List<TypeDestination> findAll() {
        return null;
    }

    @Override
    public Optional<TypeDestination> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public TypeDestination save(TypeDestination entity) throws Exception {
        return null;
    }

    @Override
    public TypeDestination update(TypeDestination entity) throws Exception {
        return null;
    }

    @Override
    public void delete(TypeDestination entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(TypeDestination entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}