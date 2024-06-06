package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.dto.TripInsuranceDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripInsuranceRepository extends JpaRepository<TripInsurance,Integer> {

    @Query(nativeQuery = true)
    public List<TripInsuranceDTO> seeTripInsurancebyDestination(@Param("pDest") Integer idDestination);
    @Query(nativeQuery = true)
    public TripInsuranceDTO seeTripInsurancePerTripDestination(@Param("pId") Integer idTripDestination);
}
