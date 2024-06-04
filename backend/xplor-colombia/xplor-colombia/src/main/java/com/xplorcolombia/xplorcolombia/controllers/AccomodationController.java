package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.repository.AccommodationRepository;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TransportationRepository;
import com.xplorcolombia.xplorcolombia.service.AccommodationService;
import com.xplorcolombia.xplorcolombia.service.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/accommodation")
public class AccomodationController {

    @Autowired
    private AccommodationService accomodationService;
    private List<AccommodationDTO> lstAccommodation;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;

    @RequestMapping(value = "/PerDestination", method = RequestMethod.GET)
    public ResponseEntity<?> getAccommodationPerDestination(@RequestHeader Integer idDestination){
        Optional<Destination> oDestination = destinationRepository.findById(idDestination);
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            lstAccommodation=accommodationRepository.seeAccommodationbyDestination(idDestination);
            if(lstAccommodation.isEmpty()){
                return ResponseEntity.status(400).body("No hay Alojamientos en la base de datos");
            }else{
                return ResponseEntity.status(200).body(lstAccommodation);
            }
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createAccommodation(@RequestBody Accommodation request){
        Optional<Destination> oDestination = destinationRepository.findById(request.getDestination().getId());
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            Accommodation accommodation = new Accommodation(request.getName(), request.getPrice(), request.getState(), destinationInRepository,request.getLodging());
            accommodationRepository.save(accommodation);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteAccommodation(@RequestBody Integer idAccommodation){
        Optional<Accommodation> oAccommodation = accommodationRepository.findById(idAccommodation);
        if(oAccommodation.isPresent()){
            Accommodation accommodationToDelete = oAccommodation.get();
            accommodationToDelete.setState("D");
            accommodationRepository.save(accommodationToDelete);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Accommodation not found.");
    }
}
