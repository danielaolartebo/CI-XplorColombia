package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.repository.TransportationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class TransportationServiceImpl implements TransportationService {

    @Autowired
    private TransportationRepository transportationRepository;

    @Override
    public List<Transportation> findAll() {
        return transportationRepository.findAll();
    }

    @Override
    public Optional<Transportation> findById(Integer integer) {
        return transportationRepository.findById(integer);
    }

    @Override
    public Transportation save(Transportation entity) throws Exception {
        return transportationRepository.save(entity);
    }

    @Override
    public Transportation update(Transportation entity) throws Exception {
        return transportationRepository.save(entity);
    }

    @Override
    public void delete(Transportation entity) throws Exception {
        transportationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        transportationRepository.deleteById(integer);
    }

    @Override
    public void validate(Transportation entity) throws Exception {

    }

    @Override
    public Long count() {
        return transportationRepository.count();
    }

    @Override
    public List<TransportationDTO> seeTransportationbyDestination(Integer idDestination) {
        return transportationRepository.seeTransportationbyDestination(idDestination);
    }
}