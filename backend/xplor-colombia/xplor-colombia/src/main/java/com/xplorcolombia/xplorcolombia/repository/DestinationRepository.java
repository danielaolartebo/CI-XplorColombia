package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DestinationRepository extends JpaRepository<Destination,Integer> {

    public DestinationDTO findByName(String name);

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinations();

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinationId(@Param(":pDest") String destination);

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinationsPerPackage(@Param(":pPackage") String packageName);
}
