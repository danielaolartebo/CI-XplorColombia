package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Trip;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.dto.TripDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripRepository extends JpaRepository<Trip,Integer> {

    @Query(nativeQuery = true)
    public List<TripDTO> seeTripPerClient(@Param("pId") Integer idCustomer);

    @Query(nativeQuery = true)
    public List<TripDTO> seeTripPerPackage(@Param("pPack") String packName);
}
