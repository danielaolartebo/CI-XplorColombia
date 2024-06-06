package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;


public interface CustomerService extends GenericService<Customer, Integer> {

    public CustomerDTO seeCustomer(Integer idCustomer);
}