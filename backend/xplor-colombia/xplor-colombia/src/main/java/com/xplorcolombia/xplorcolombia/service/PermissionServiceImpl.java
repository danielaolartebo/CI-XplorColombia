package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Permission;
import com.xplorcolombia.xplorcolombia.dto.PackageDTO;
import com.xplorcolombia.xplorcolombia.repository.PackageRepository;
import com.xplorcolombia.xplorcolombia.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    PermissionRepository permissionRepository;

    @Override
    public List<Permission> findAll() {
        return permissionRepository.findAll();
    }

    @Override
    public Optional<Permission> findById(Integer integer) {

        return permissionRepository.findById(integer);
    }

    @Override
    public Permission save(Permission entity) throws Exception {
        return permissionRepository.save(entity);
    }

    @Override
    public Permission update(Permission entity) throws Exception {
        return permissionRepository.save(entity);
    }

    @Override
    public void delete(Permission entity) throws Exception {
        permissionRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        permissionRepository.deleteById(integer);
    }

    @Override
    public void validate(Permission entity) throws Exception {

    }

    @Override
    public Long count() {

        return permissionRepository.count();
    }


}