package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.AccommodationRepository;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class AccommodationServiceImpl implements AccommodationService {

    @Autowired
    private AccommodationRepository accommodationRepository;

    @Override
    public List<Accommodation> findAll() {

        return accommodationRepository.findAll();
    }

    @Override
    public Optional<Accommodation> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Accommodation save(Accommodation entity) throws Exception {
        return accommodationRepository.save(entity);
    }

    @Override
    public Accommodation update(Accommodation entity) throws Exception {
        return accommodationRepository.save(entity);
    }

    @Override
    public void delete(Accommodation entity) throws Exception {
        accommodationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        accommodationRepository.deleteById(integer);
    }

    @Override
    public void validate(Accommodation entity) throws Exception {

    }

    @Override
    public Long count() {
        return accommodationRepository.count();
    }

    @Override
    public List<AccommodationDTO> seeAccommodations(String destination) {
        return accommodationRepository.seeAccommodations(destination);
    }
}