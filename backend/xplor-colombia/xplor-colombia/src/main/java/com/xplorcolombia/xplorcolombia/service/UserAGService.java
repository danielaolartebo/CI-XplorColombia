package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.UserAG;

import java.util.Optional;

public interface UserAGService extends GenericService<UserAG, Integer> {
    public Optional<UserAG> findByEmail(String email);
}