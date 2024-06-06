package com.xplorcolombia.xplorcolombia.repository;
import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends JpaRepository<Customer,Integer>{

    @Query(nativeQuery = true)
    public CustomerDTO seeCustomer(@Param("pId") Integer idCustomer);
}
