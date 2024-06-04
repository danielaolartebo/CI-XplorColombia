package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Scope("singleton")
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findById(Integer integer) {
        return customerRepository.findById(integer);
    }

    @Override
    public Customer save(Customer entity) throws Exception {
        return customerRepository.save(entity);
    }

    @Override
    public Customer update(Customer entity) throws Exception {
        return customerRepository.save(entity);
    }

    @Override
    public void delete(Customer entity) throws Exception {
        customerRepository.delete(entity);
    }

    @Override
    public void deleteById(Integer integer) throws Exception {
        customerRepository.deleteById(integer);
    }

    @Override
    public void validate(Customer entity) throws Exception {

    }

    @Override
    public Long count() {
        return customerRepository.count();
    }
}
