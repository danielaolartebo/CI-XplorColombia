package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Permission;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class PermissionServiceImpl implements PermissionService {
    @Override
    public List<Permission> findAll() {
        return null;
    }

    @Override
    public Optional<Permission> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Permission save(Permission entity) throws Exception {
        return null;
    }

    @Override
    public Permission update(Permission entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Permission entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Permission entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}