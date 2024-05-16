package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.TypeDestination;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.repository.TypeDestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class TypeDestinationServiceImpl implements TypeDestinationService {

    @Autowired
    private TypeDestinationRepository typeDestinationRepository;

    @Override
    public List<TypeDestination> findAll() {
        return typeDestinationRepository.findAll();
    }

    @Override
    public Optional<TypeDestination> findById(Integer integer) {
        return typeDestinationRepository.findById(integer);
    }

    @Override
    public TypeDestination save(TypeDestination entity) throws Exception {
        return typeDestinationRepository.save(entity);
    }

    @Override
    public TypeDestination update(TypeDestination entity) throws Exception {
        return typeDestinationRepository.save(entity);
    }

    @Override
    public void delete(TypeDestination entity) throws Exception {
        typeDestinationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        typeDestinationRepository.deleteById(integer);
    }

    @Override
    public void validate(TypeDestination entity) throws Exception {

    }

    @Override
    public Long count() {
        return typeDestinationRepository.count();
    }

}