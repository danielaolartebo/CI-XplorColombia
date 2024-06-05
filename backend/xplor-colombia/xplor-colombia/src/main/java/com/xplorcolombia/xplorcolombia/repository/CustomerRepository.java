package com.xplorcolombia.xplorcolombia.repository;
import com.xplorcolombia.xplorcolombia.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CustomerRepository extends JpaRepository<Customer,Integer>{
}
