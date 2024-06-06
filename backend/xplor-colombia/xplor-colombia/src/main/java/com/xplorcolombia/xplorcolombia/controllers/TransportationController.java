package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Modifications;
import com.xplorcolombia.xplorcolombia.domain.Transportation;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.TransportationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.ModificationsRepository;
import com.xplorcolombia.xplorcolombia.repository.TransportationRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
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
@RequestMapping("/transportation")
public class TransportationController {

    @Autowired
    private TransportationService transportationService;
    private List<TransportationDTO> lstTransportation;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private TransportationRepository transportationRepository;
    @Autowired
    private UserAGRepository userAGRepository;
    @Autowired
    private ModificationsRepository modificationsRepository;

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite registrar un nuevo transporte desde cualquier usuario.";
            String modi="Se creó el transporte "+request.getName()+" en el destino "+destinationInRepository.getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="CREATE-TRANSPORTATION";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

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

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite eliminar (Cambio de estado a desactivado) un transporte desde cualquier usuario.";
            String modi="Se eliminó el transporte "+transportationToDelete.getName()+" del destino "+transportationToDelete.getDestination().getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="DELETE-TRANSPORTATION";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);


            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Transportation not found.");
    }
}
