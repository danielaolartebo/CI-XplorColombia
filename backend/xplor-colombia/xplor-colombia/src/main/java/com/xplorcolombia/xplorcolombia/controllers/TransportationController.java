package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TransportationRepository;
import com.xplorcolombia.xplorcolombia.service.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/transportation")
public class TransportationController {

    @Autowired
    private TransportationService transportationService;
    private List<TransportationDTO> lstTransportation;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private TransportationRepository transportationRepository;

    @RequestMapping(value = "/PerDestination", method = RequestMethod.GET)
    public ResponseEntity<?> getTransportationPerDestination(@RequestHeader Integer idDestination){
        Optional<Destination> oDestination = destinationRepository.findById(idDestination);
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            System.out.println("Destination: " + destinationInRepository);
            lstTransportation=transportationRepository.seeTransportationbyDestination(idDestination);
            if(lstTransportation.isEmpty()){
                return ResponseEntity.status(400).body("No hay transportes en la base de datos");
            }else{
                return ResponseEntity.status(200).body(lstTransportation);
            }
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createTransportation(@RequestBody Transportation request){
        System.out.println("Destination: id " + request.getDestination().getId());
        Optional<Destination> oDestination = destinationRepository.findById(request.getDestination().getId());
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            System.out.println("Destination: " + destinationInRepository);
            Transportation transportation = new Transportation(request.getName(), request.getPrice(), request.getState(), destinationInRepository);
            transportationRepository.save(transportation);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteTransportation(@RequestBody Integer idTransportation){
        Optional<Transportation> oTransportation = transportationRepository.findById(idTransportation);
        if(oTransportation.isPresent()){
            Transportation transportationToDelete = oTransportation.get();
            transportationToDelete.setState("D");
            transportationRepository.save(transportationToDelete);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Transportation not found.");
    }
}
