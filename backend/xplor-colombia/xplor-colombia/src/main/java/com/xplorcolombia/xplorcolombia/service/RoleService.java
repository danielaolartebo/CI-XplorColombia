package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Role;
import com.xplorcolombia.xplorcolombia.domain.UserAG;

import java.util.Optional;

public interface RoleService extends GenericService<Role, Integer> {

    public Optional<Role> findByName(String role);
}