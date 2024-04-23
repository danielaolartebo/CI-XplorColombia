package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.UserAG;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class UserAGServiceImpl implements UserAGService {
    @Override
    public List<UserAG> findAll() {
        return null;
    }

    @Override
    public Optional<UserAG> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public UserAG save(UserAG entity) throws Exception {
        return null;
    }

    @Override
    public UserAG update(UserAG entity) throws Exception {
        return null;
    }

    @Override
    public void delete(UserAG entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(UserAG entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}