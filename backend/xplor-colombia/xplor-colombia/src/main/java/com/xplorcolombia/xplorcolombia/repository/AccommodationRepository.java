package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface AccommodationRepository extends JpaRepository<Accommodation,Integer>{
    @Query(nativeQuery = true)
    public List<AccommodationDTO> seeAccommodations(@Param("pDest") String destination);

}
