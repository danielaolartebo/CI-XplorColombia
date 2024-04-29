package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TransportationRepository extends JpaRepository<Transportation,Integer> {

    @Query(nativeQuery = true)
    public List<TransportationDTO> seeTranportationbyDestination(@Param("pidDest") Integer id);
}
