package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Reservation;
import com.xplorcolombia.xplorcolombia.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class ReservationServiceImpl implements ReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }

    @Override
    public Optional<Reservation> findById(Integer integer) {
        return reservationRepository.findById(integer);
    }

    @Override
    public Reservation save(Reservation entity) throws Exception {
        return reservationRepository.save(entity);
    }

    @Override
    public Reservation update(Reservation entity) throws Exception {
        return reservationRepository.save(entity);
    }

    @Override
    public void delete(Reservation entity) throws Exception {
        reservationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        reservationRepository.deleteById(integer);
    }

    @Override
    public void validate(Reservation entity) throws Exception {

    }

    @Override
    public Long count() {

        return reservationRepository.count();
    }
}