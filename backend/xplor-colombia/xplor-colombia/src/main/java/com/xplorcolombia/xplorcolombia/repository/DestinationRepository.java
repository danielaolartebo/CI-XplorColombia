package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination,Integer> {

    public Destination findByName(String name);

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinations();

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinationId(@Param("pDest") String destination);

    @Query(nativeQuery = true)
    public List<DestinationDTO> seeDestinationsPerPackage(@Param("pPackage") String packageName);

    @Query(nativeQuery = true)
    public List<DestinationDTO> destinationForReservation(@Param("pClientId") int clientId);

}
