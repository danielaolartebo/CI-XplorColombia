package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.ReservationDestination;
import com.xplorcolombia.xplorcolombia.domain.ReservationLodging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationLodgingRepository extends JpaRepository<ReservationLodging,ReservationLodging.CompusedId> {

    @Query(nativeQuery = true)
    public List<ReservationLodging> lodgingforReservation(@Param("pClientId") Integer clientId, @Param("pDest") String destination);
}
