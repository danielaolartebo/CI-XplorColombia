package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Lodging;
import com.xplorcolombia.xplorcolombia.dto.LodgingDTO;
import com.xplorcolombia.xplorcolombia.repository.LodgingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class LodgingServiceImpl implements LodgingService {

    @Autowired
    private LodgingRepository lodgingRepository;

    @Override
    public List<Lodging> findAll() {
        return lodgingRepository.findAll();
    }

    @Override
    public Optional<Lodging> findById(Integer integer) {
        return lodgingRepository.findById(integer);
    }

    @Override
    public Lodging save(Lodging entity) throws Exception {
        return lodgingRepository.save(entity);
    }

    @Override
    public Lodging update(Lodging entity) throws Exception {
        return lodgingRepository.save(entity);
    }

    @Override
    public void delete(Lodging entity) throws Exception {
        lodgingRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        lodgingRepository.deleteById(integer);
    }

    @Override
    public void validate(Lodging entity) throws Exception {

    }

    @Override
    public Long count() {
        return lodgingRepository.count();
    }

    @Override
    public List<LodgingDTO> seeHotels(String destination) {
        return lodgingRepository.seeHotels(destination);
    }
}