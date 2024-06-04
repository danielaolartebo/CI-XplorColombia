package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.dto.TripInsuranceDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.TripInsuranceRepository;
import com.xplorcolombia.xplorcolombia.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/tripInsurance")
public class TripInsuranceController {

    @Autowired
    private TripService tripService;
    private List<TripInsuranceDTO> lstTripInsurance;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private TripInsuranceRepository tripInsuranceRepository;

    @RequestMapping(value = "/PerDestination", method = RequestMethod.GET)
    public ResponseEntity<?> getTripInsurancePerDestination(@RequestHeader Integer idDestination){
        Optional<Destination> oDestination = destinationRepository.findById(idDestination);
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            lstTripInsurance=tripInsuranceRepository.seeTripInsurancebyDestination(idDestination);
            if(lstTripInsurance.isEmpty()){
                return ResponseEntity.status(400).body("No hay Comidas en la base de datos");
            }else{
                return ResponseEntity.status(200).body(lstTripInsurance);
            }
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createTripInsurance(@RequestBody TripInsurance request){
        Optional<Destination> oDestination = destinationRepository.findById(request.getDestination().getId());
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            TripInsurance tripInsurance = new TripInsurance(request.getType(), request.getPrice(), request.getState(), destinationInRepository);
            tripInsuranceRepository.save(tripInsurance);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteTripInsurance(@RequestBody Integer idTripInsurance){
        Optional<TripInsurance> oTripInsurance = tripInsuranceRepository.findById(idTripInsurance);
        if(oTripInsurance.isPresent()){
            TripInsurance tripInsuranceToDelete = oTripInsurance.get();
            tripInsuranceToDelete.setState("D");
            tripInsuranceRepository.save(tripInsuranceToDelete);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("TripInsurance not found.");
    }
}