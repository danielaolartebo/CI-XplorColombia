package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class DestinationServiceImpl implements DestinationService {

    @Autowired
    private DestinationRepository destinationRepository;

    @Override
    public List<Destination> findAll() {
        return destinationRepository.findAll();
    }

    @Override
    public Optional<Destination> findById(Integer integer) {
        return destinationRepository.findById(integer);
    }

    @Override
    public Destination save(Destination entity) throws Exception {
        return destinationRepository.save(entity);
    }

    @Override
    public Destination update(Destination entity) throws Exception {
        return destinationRepository.save(entity);
    }

    @Override
    public void delete(Destination entity) throws Exception {
        destinationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        destinationRepository.deleteById(integer);
    }

    @Override
    public void validate(Destination entity) throws Exception {

    }

    @Override
    public Long count() {
        return destinationRepository.count();
    }

    @Override
    public List<DestinationDTO> seeDestinations() {
        return destinationRepository.seeDestinations();
    }

    @Override
    public List<DestinationDTO> seeDestinationId(String destination) {
        return destinationRepository.seeDestinationId(destination);
    }

    @Override
    public List<DestinationDTO> seeDestinationsPerPackage(String packageName) {
        return destinationRepository.seeDestinationsPerPackage(packageName);
    }
}