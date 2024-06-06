package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Trip;
import com.xplorcolombia.xplorcolombia.dto.TripDTO;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface TripService extends GenericService<Trip, Integer>{

    public List<TripDTO> seeTripPerClient(Integer idCustomer);

    public List<TripDTO> seeTripPerPackage(String packName);
}
