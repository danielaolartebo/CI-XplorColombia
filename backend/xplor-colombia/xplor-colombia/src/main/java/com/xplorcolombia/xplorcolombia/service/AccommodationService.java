package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;

import java.util.List;


public interface AccommodationService extends GenericService<Accommodation, Integer> {

    public List<AccommodationDTO> seeAccommodations(String destination);

    public List<AccommodationDTO> seeAccommodationbyDestination(Integer idDestination);
}