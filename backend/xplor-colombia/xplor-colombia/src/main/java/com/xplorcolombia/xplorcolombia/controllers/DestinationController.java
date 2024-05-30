package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/destination")
public class DestinationController {

    @Autowired
    private DestinationService destination;
    private List<DestinationDTO> lstDestination;

    @RequestMapping(value = "/getDestination", method = RequestMethod.GET)
    public ResponseEntity<?> seeDestinationPerId(@RequestBody String id){

        lstDestination = destination.seeDestinationId(id);
        return ResponseEntity.ok().body(lstDestination);
    }

    @RequestMapping(value = "/getDestinationPerPackage", method = RequestMethod.GET)
    public ResponseEntity<?> seeDestinationPerPackage(@RequestBody String packages){

        lstDestination = destination.seeDestinationsPerPackage(packages);
        return ResponseEntity.ok().body(lstDestination);
    }

    @RequestMapping(value = "/getDestinationPerReservation",method = RequestMethod.GET)
    public ResponseEntity<?> destinationForReservation(@RequestBody String id){

        int idChange = Integer.parseInt(id);

        lstDestination = destination.destinationsForReservation(idChange);
        return ResponseEntity.ok().body(lstDestination);
    }

    @RequestMapping(value = "/createDestiantion", method = RequestMethod.POST)
    public ResponseEntity<?> registDestination(@RequestBody Destination destination){
        destination.getMeal().getType();
        return ResponseEntity.status(400).body("NO ESTA TERMINADA ESTA PARTE");
    }


}
