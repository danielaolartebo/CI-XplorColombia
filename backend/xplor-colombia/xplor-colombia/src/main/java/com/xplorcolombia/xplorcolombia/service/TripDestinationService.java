package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.TripDestination;
import com.xplorcolombia.xplorcolombia.dto.TripDestinationDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripDestinationService  extends GenericService<TripDestination, Integer>{
    public List<TripDestinationDTO> seeTripDestPerClient(Integer idTrip);
}
