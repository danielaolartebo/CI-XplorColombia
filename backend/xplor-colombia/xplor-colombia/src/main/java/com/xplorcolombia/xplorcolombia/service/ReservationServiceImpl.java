package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Reservation;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class ReservationServiceImpl implements ReservationService {
    @Override
    public List<Reservation> findAll() {
        return null;
    }

    @Override
    public Optional<Reservation> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Reservation save(Reservation entity) throws Exception {
        return null;
    }

    @Override
    public Reservation update(Reservation entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Reservation entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Reservation entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}