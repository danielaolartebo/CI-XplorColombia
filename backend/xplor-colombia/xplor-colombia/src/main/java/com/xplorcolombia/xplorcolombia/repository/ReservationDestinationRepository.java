package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.ReservationDestination;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.dto.ReservationAccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.ReservationDestinationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationDestinationRepository extends JpaRepository<ReservationDestination,ReservationDestination.CompusedId> {

    public List<ReservationDestinationDTO> destinationForReservation(@Param(":pClientId") Integer clientId);
}
