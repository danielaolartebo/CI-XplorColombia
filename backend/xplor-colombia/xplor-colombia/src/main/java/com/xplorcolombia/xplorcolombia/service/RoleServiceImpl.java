package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Role;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Role> findById(Integer integer) {
        return roleRepository.findById(integer);
    }

    @Override
    public Role save(Role entity) throws Exception {
        return roleRepository.save(entity);
    }

    @Override
    public Role update(Role entity) throws Exception {
        return roleRepository.save(entity);
    }

    @Override
    public void delete(Role entity) throws Exception {
        roleRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        roleRepository.deleteById(integer);
    }

    @Override
    public void validate(Role entity) throws Exception {

    }

    @Override
    public Long count() {
        return roleRepository.count();
    }


    @Override
    public Optional<Role> findByName(String role) {

        return roleRepository.findByName(role);
    }
}