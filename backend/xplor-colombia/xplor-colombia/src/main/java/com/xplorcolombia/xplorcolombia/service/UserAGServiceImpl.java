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
        Optional<UserAG> oUserAG = userAGRepository.findByEmail(email);
        if (oUserAG.isPresent()) {
            UserAG foundUser = oUserAG.get();
            return new UserAGDTO(foundUser.getId(), foundUser.getName(), foundUser.getEmail(), foundUser.getPassword(), foundUser.getState());
        }
        return null;
    }
    @Override
    public List<UserAG> findAll() {
        return userAGRepository.findAll();
    }

    @Override
    public Optional<UserAG> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public UserAG save(UserAG entity) throws Exception {
        return userAGRepository.save(entity);
    }

    @Override
    public UserAG update(UserAG entity) throws Exception {
        return userAGRepository.save(entity);
    }

    @Override
    public void delete(UserAG entity) throws Exception {
        userAGRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        userAGRepository.deleteById(integer);
    }

    @Override
    public void validate(UserAG entity) throws Exception {

    }

    @Override
    public Long count() {
        return userAGRepository.count();
    }

    @Override
    public Optional<UserAG> findByEmail(String email) {
        return userAGRepository.findByEmail(email);
    }
}