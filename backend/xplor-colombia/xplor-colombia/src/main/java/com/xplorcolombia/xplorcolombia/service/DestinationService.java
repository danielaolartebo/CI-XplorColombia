package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;


import java.util.List;
import java.util.Optional;

public interface DestinationService extends GenericService<Destination, Integer> {

    public List<DestinationDTO> seeDestinations();

    public List<DestinationDTO> seeDestinationId(String destination);

    public List<DestinationDTO> seeDestinationsPerPackage(String packageName);

    public DestinationDTO seeDestinationPerTripDestination(Integer clientId);

    public Destination findByName(String name);
}