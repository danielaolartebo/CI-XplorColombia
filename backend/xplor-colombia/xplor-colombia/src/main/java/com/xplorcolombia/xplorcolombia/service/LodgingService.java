package com.xplorcolombia.xplorcolombia.service;


import com.xplorcolombia.xplorcolombia.domain.Lodging;
import com.xplorcolombia.xplorcolombia.dto.LodgingDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LodgingService extends GenericService<Lodging, Integer> {

    public List<LodgingDTO> seeHotels(String destination);
}
