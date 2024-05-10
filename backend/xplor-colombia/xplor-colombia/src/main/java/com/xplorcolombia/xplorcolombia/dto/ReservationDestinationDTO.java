package com.xplorcolombia.xplorcolombia.dto;

import com.xplorcolombia.xplorcolombia.domain.ReservationDestination;
import com.xplorcolombia.xplorcolombia.repository.ReservationRepository;

public class ReservationDestinationDTO {

    private String name;
    public ReservationDestinationDTO(String name){
        this.name = name;
    }

}
