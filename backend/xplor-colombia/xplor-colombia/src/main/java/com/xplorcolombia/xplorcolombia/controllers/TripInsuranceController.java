package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Modifications;
import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.TripInsuranceDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.ModificationsRepository;
import com.xplorcolombia.xplorcolombia.repository.TripInsuranceRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
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
    @Autowired
    private UserAGRepository userAGRepository;
    @Autowired
    private ModificationsRepository modificationsRepository;

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite registrar un nuevo seguro desde cualquier usuario.";
            String modi="Se creó el seguro "+request.getType()+" en el destino "+destinationInRepository.getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="CREATE-TRIPINSURANCE";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite eliminar (Cambio de estado a desactivado) una opción de seguro desde cualquier usuario.";
            String modi="Se eliminó el seguro "+tripInsuranceToDelete.getType()+" del destino "+tripInsuranceToDelete.getDestination().getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="DELETE-TRIPINSURANCE";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("TripInsurance not found.");
    }
}