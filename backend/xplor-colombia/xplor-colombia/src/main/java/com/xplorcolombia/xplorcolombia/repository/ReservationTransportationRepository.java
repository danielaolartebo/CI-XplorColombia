package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.ReservationTransportation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationTransportationRepository extends JpaRepository<ReservationTransportation,ReservationTransportation.CompusedId> {
}
