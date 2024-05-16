package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.repository.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/accommodation")
public class AccomodationController {

    @Autowired
    private AccommodationRepository accommodationRepository;
    private List<AccommodationDTO> lstAccommodation;

    @PostMapping(value = "getAccommodation")
    public ResponseEntity<?> seeAccommodations(@RequestBody String destination){
        lstAccommodation = accommodationRepository.seeAccommodations(destination);
        return ResponseEntity.ok().body(lstAccommodation);
    }
}
