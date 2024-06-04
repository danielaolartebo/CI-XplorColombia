package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.PackageDestination;
import com.xplorcolombia.xplorcolombia.domain.TripDestination;
import com.xplorcolombia.xplorcolombia.repository.PackageDestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TripDestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class PackageDestinationServiceImpl implements PackageDestinationService {


    @Autowired
    private PackageDestinationRepository packageDestinationRepository;

    @Override
    public List<PackageDestination> findAll() {
        return packageDestinationRepository.findAll();
    }

    @Override
    public Optional<PackageDestination> findById(Integer integer) {
        return packageDestinationRepository.findById(integer);
    }

    @Override
    public PackageDestination save(PackageDestination entity) throws Exception {
        return packageDestinationRepository.save(entity);
    }

    @Override
    public PackageDestination update(PackageDestination entity) throws Exception {
        return packageDestinationRepository.save(entity);
    }

    @Override
    public void delete(PackageDestination entity) throws Exception {
        packageDestinationRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        packageDestinationRepository.deleteById(integer);
    }

    @Override
    public void validate(PackageDestination entity) throws Exception {

    }

    @Override
    public Long count() {
        return packageDestinationRepository.count();
    }


}
