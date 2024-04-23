package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Package;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class PackageServiceImpl implements PackageService {
    @Override
    public List<Package> findAll() {
        return null;
    }

    @Override
    public Optional<Package> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Package save(Package entity) throws Exception {
        return null;
    }

    @Override
    public Package update(Package entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Package entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Package entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}