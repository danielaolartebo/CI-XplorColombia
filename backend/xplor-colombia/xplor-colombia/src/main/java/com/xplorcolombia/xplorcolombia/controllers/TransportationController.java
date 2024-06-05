package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.service.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transportation")
public class TransportationController {

    /*@Autowired
    private TransportationService transportation;
    private List<TransportationDTO> lstTransportation;

    @PostMapping(value = "/getTransportationPerReservation")
    public ResponseEntity<?> transportationForReservation(@RequestBody String dest){
        lstTransportation = transportation.seeTranportationbyDestination(dest);

        return ResponseEntity.ok().body(lstTransportation);
    }*/
}
