package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface AccommodationService extends GenericService<Accommodation, Integer> {

    public AccommodationDTO seeAccommodationPerTripDestination(Integer idTripDestination);

    public List<AccommodationDTO> seeAccommodationbyDestination(Integer idDestination);
}