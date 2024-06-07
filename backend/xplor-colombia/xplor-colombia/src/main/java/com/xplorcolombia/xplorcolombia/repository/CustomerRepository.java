package com.xplorcolombia.xplorcolombia.repository;
import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer,Integer>{
    @Query(nativeQuery = true)
    public Optional<CustomerDTO> findByNit(@Param("pNit") Integer nit);

}
