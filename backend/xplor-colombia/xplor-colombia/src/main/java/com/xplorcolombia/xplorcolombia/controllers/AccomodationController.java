package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.*;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.repository.*;
import com.xplorcolombia.xplorcolombia.service.AccommodationService;
import com.xplorcolombia.xplorcolombia.service.TransportationService;
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
@RequestMapping("/accommodation")
public class AccomodationController {

    @Autowired
    private AccommodationService accomodationService;
    private List<AccommodationDTO> lstAccommodation;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;
    @Autowired
    private UserAGRepository userAGRepository;
    @Autowired
    private ModificationsRepository modificationsRepository;

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite registrar un nuevo alojamiento desde cualquier usuario.";
            String modi="Se creó el alojamiento "+request.getName()+" en el Hotel "+request.getLodging()+" que pertenece al destino "+destinationInRepository.getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="CREATE-ACCOMMODATION";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite eliminar (Cambio de estado a desactivado) un alojamiento desde cualquier usuario.";
            String modi="Se eliminó el alojamiento "+accommodationToDelete.getName()+" del hotel "+accommodationToDelete.getLodging()+" que pertenecia al destino "+accommodationToDelete.getDestination().getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="DELETE-ACCOMMODATION";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Accommodation not found.");
    }
}
