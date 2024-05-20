package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Client;
import com.xplorcolombia.xplorcolombia.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> findById(Integer integer) {
        return clientRepository.findById(integer);
    }

    @Override
    public Client save(Client entity) throws Exception {
        return clientRepository.save(entity);
    }

    @Override
    public Client update(Client entity) throws Exception {
        return clientRepository.save(entity);
    }

    @Override
    public void delete(Client entity) throws Exception {
        clientRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        clientRepository.deleteById(integer);
    }

    @Override
    public void validate(Client entity) throws Exception {

    }

    @Override
    public Long count() {
        return clientRepository.count();
    }
}
