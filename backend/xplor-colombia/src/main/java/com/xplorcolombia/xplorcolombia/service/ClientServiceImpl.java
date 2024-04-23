package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Client;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class ClientServiceImpl implements ClientService {
    @Override
    public List<Client> findAll() {
        return null;
    }

    @Override
    public Optional<Client> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public Client save(Client entity) throws Exception {
        return null;
    }

    @Override
    public Client update(Client entity) throws Exception {
        return null;
    }

    @Override
    public void delete(Client entity) throws Exception {

    }

    @Override
    public void deleteById(Integer integer) throws Exception {

    }

    @Override
    public void validate(Client entity) throws Exception {

    }

    @Override
    public Long count() {
        return null;
    }
}
