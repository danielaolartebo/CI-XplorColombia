package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.ReservationAccommodation;
import com.xplorcolombia.xplorcolombia.domain.ReservationDestination;
import com.xplorcolombia.xplorcolombia.dto.ReservationAccommodationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationAccommodationRepository extends JpaRepository<ReservationAccommodation, ReservationAccommodation.CompusedId> {

    public List<ReservationAccommodationDTO>accommodationForReservation(@Param(":pClientId") Integer clientId, @Param(":pDest") String destination);

}
