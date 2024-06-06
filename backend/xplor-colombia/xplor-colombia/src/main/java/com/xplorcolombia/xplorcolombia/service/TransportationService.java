package com.xplorcolombia.xplorcolombia.service;


import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TransportationService extends GenericService<Transportation, Integer> {

    public List<TransportationDTO> seeTransportationbyDestination(Integer idDestination);

    public TransportationDTO seeTransportationPerTripDestination(Integer idTripDestination);
}