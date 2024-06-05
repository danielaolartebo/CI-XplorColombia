package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip,Integer> {
}
