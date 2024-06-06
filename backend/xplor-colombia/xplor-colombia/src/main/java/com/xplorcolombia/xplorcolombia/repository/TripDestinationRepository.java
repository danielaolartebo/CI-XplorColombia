package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.TripDestination;
import com.xplorcolombia.xplorcolombia.dto.TripDestinationDTO;
import com.xplorcolombia.xplorcolombia.dto.TripInsuranceDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripDestinationRepository extends JpaRepository<TripDestination,Integer> {

    @Query(nativeQuery = true)
    public List<TripDestinationDTO> seeTripDestPerClient(@Param("pId") Integer idTrip);
}
