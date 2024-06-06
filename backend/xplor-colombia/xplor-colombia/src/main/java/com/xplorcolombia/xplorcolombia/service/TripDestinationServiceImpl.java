package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.TripDestination;
import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.dto.TripDestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.TripDestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TripInsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class TripDestinationServiceImpl implements TripDestinationService {


    @Autowired
    private TripDestinationRepository tripDestinationRepository;

    @Override
    public List<TripDestination> findAll() {
        return tripDestinationRepository.findAll();
    }

    @Override
    public Optional<TripDestination> findById(Integer integer) {
        return tripDestinationRepository.findById(integer);
    }

    @Override
    public TripDestination save(TripDestination entity) throws Exception {
        return tripDestinationRepository.save(entity);
    }

    @Override
    public TripDestination update(TripDestination entity) throws Exception {
        return tripDestinationRepository.save(entity);
    }

    @Override
    public void delete(TripDestination entity) throws Exception {
        tripDestinationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        tripDestinationRepository.deleteById(integer);
    }

    @Override
    public void validate(TripDestination entity) throws Exception {

    }

    @Override
    public Long count() {
        return tripDestinationRepository.count();
    }


    @Override
    public List<TripDestinationDTO> seeTripDestPerClient(Integer idTrip) {
        return tripDestinationRepository.seeTripDestPerClient(idTrip);
    }
}
