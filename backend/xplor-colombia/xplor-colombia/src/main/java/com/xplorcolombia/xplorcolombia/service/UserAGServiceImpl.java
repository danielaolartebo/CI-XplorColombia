package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.UserAGDTO;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Scope("singleton")
@Service
public class UserAGServiceImpl implements UserAGService {

    @Autowired
    private UserAGRepository userAGRepository;

    public UserAGDTO loadUserByUsername(String email) {
        UserAG userAG = userAGRepository.findByEmail(email);
        if (userAG == null) {
            return null;
        }
        return new UserAGDTO(userAG.getId(), userAG.getName(), userAG.getEmail(),userAG.getPassword(),userAG.getState());
    }
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