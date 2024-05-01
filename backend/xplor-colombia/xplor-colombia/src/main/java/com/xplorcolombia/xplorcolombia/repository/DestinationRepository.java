package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DestinationRepository extends JpaRepository<Destination,Integer> {

    public DestinationDTO findByName(String name);

   // @Query(nativeQuery = true)
    //public List<DestinationDTO> seeDestinations();
}
