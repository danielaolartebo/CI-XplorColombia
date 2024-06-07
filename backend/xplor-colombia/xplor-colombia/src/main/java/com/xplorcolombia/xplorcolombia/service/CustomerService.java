package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;

import java.util.Optional;

public interface CustomerService extends GenericService<Customer, Integer> {
    public Optional<CustomerDTO> findByNit(Integer nit);
}