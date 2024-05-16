package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Lodging;
import com.xplorcolombia.xplorcolombia.dto.LodgingDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LodgingRepository extends JpaRepository<Lodging,Integer> {

    @Query(nativeQuery = true)
    public List<LodgingDTO> seeHotels(@Param("pDest") String destination);
}
