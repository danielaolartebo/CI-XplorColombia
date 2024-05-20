package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Package;
import com.xplorcolombia.xplorcolombia.dto.PackageDTO;
import com.xplorcolombia.xplorcolombia.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class PackageServiceImpl implements PackageService {
    @Autowired
    private PackageRepository packageRepository;

    @Override
    public List<Package> findAll() {
        return packageRepository.findAll();
    }

    @Override
    public Optional<Package> findById(Integer integer) {
        return packageRepository.findById(integer);
    }

    @Override
    public Package save(Package entity) throws Exception {
        return packageRepository.save(entity);
    }

    @Override
    public Package update(Package entity) throws Exception {
        return packageRepository.save(entity);
    }

    @Override
    public void delete(Package entity) throws Exception {
        packageRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        packageRepository.deleteById(integer);
    }

    @Override
    public void validate(Package entity) throws Exception {

    }

    @Override
    public Long count() {

        return packageRepository.count();
    }

    @Override
    public List<PackageDTO> seePackages() {
        return packageRepository.seePackages();
    }
}