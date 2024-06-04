package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Trip;
import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.repository.TripInsuranceRepository;
import com.xplorcolombia.xplorcolombia.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class TripInsuranceServiceImpl implements TripInsuranceService {

    @Autowired
    private TripInsuranceRepository tripInsuranceRepository;

    @Override
    public List<TripInsurance> findAll() {
        return tripInsuranceRepository.findAll();
    }

    @Override
    public Optional<TripInsurance> findById(Integer integer) {
        return tripInsuranceRepository.findById(integer);
    }

    @Override
    public TripInsurance save(TripInsurance entity) throws Exception {
        return tripInsuranceRepository.save(entity);
    }

    @Override
    public TripInsurance update(TripInsurance entity) throws Exception {
        return tripInsuranceRepository.save(entity);
    }

    @Override
    public void delete(TripInsurance entity) throws Exception {
        tripInsuranceRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        tripInsuranceRepository.deleteById(integer);
    }

    @Override
    public void validate(TripInsurance entity) throws Exception {

    }

    @Override
    public Long count() {
        return tripInsuranceRepository.count();
    }


}