package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Trip;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.dto.UserAGDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TripRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class TripServiceImpl implements TripService {

    @Autowired
    private TripRepository tripRepository;

    @Override
    public List<Trip> findAll() {
        return tripRepository.findAll();
    }

    @Override
    public Optional<Trip> findById(Integer integer) {
        return tripRepository.findById(integer);
    }

    @Override
    public Trip save(Trip entity) throws Exception {
        return tripRepository.save(entity);
    }

    @Override
    public Trip update(Trip entity) throws Exception {
        return tripRepository.save(entity);
    }

    @Override
    public void delete(Trip entity) throws Exception {
        tripRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        tripRepository.deleteById(integer);
    }

    @Override
    public void validate(Trip entity) throws Exception {

    }

    @Override
    public Long count() {
        return tripRepository.count();
    }


}