package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Package;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/destination")
public class DestinationController {

    @Autowired
    private DestinationService destination;
    private List<DestinationDTO> lstDestination;
    @Autowired
    private DestinationRepository destinationRepository;

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<?> getAllDestination(){
        lstDestination = destination.seeDestinations();
        if(lstDestination.isEmpty()){
            return ResponseEntity.status(400).body("No hay destinos en la base de datos");
        }else{
            System.out.println(lstDestination);
            return ResponseEntity.status(200).body(lstDestination);
        }
    }

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

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> registDestination(@RequestBody Destination destination){
        //System.out.println(destination);
        destinationRepository.save(destination);
        Destination data = destinationRepository.findByName(destination.getName());
        //System.out.println(destination);
        return ResponseEntity.status(200).body(data);
        //destination.getMeal().getType();
        //return ResponseEntity.status(400).body("NO ESTA TERMINADA ESTA PARTE");
    }


}
