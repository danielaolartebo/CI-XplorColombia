package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.*;
import com.xplorcolombia.xplorcolombia.domain.Package;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.ModificationsRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.service.DestinationService;
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
@RequestMapping("/destination")
public class DestinationController {

    @Autowired
    private DestinationService destination;
    private List<DestinationDTO> lstDestination;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private UserAGRepository userAGRepository;
    @Autowired
    private ModificationsRepository modificationsRepository;

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

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public ResponseEntity<?> seeDestinationPerId(@RequestHeader Integer id){
        Optional<Destination> oDestination = destinationRepository.findById(id);
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            return ResponseEntity.status(200).body(destinationInRepository);
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> registDestination(@RequestBody Destination destination){
        //System.out.println(destination);
        Destination data = destinationRepository.findByName(destination.getName());

        String destinationNameWithoutSpaces = destination.getName().replaceAll("\\s+", "");

        List<Destination> existingDestinations = destinationRepository.findAll();
        for (Destination existingDestination : existingDestinations) {
            String existingNameWithoutSpaces = existingDestination.getName().replaceAll("\\s+", "");

            if (destinationNameWithoutSpaces.equalsIgnoreCase(existingNameWithoutSpaces)) {
                System.out.println("No se puede guardar porque existe un duplicado");
                return ResponseEntity.status(400).body("Destination name already exists in the database.");
            }

            String[] existingNameWords = existingDestination.getName().split("\\s+");
            String[] destinationNameWords = destination.getName().split("\\s+");

            if (existingNameWords.length == destinationNameWords.length) {
                boolean isSameOrder = true;
                for (int i = 0; i < existingNameWords.length; i++) {
                    if (!existingNameWords[i].equalsIgnoreCase(destinationNameWords[i])) {
                        isSameOrder = false;
                        break;
                    }
                }
                if (isSameOrder) {
                    System.out.println("No se puede guardar porque existe un duplicado");
                    return ResponseEntity.status(400).body("Destination name with the same order of words already exists.");
                }
            }
        }
        System.out.println("Se ha guardado exitosamente");
        destinationRepository.save(destination);
        System.out.println(destination);

        //---Añadir modificacion
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        //INFORMACION DE LA MODIFICACION
        String modiDescription="Se permite registrar un nuevo destino desde cualquier usuario.";
        String modi="Se creó el destino "+destination.getName()+".";
        LocalDateTime localDateTime = LocalDateTime.now();
        Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        String modiName="CREATE-DESTINATION";
        //----------------------------------
        Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
        modificationsRepository.save(modifications);

        return ResponseEntity.status(200).body(data);
        //destination.getMeal().getType();
        //return ResponseEntity.status(400).body("NO ESTA TERMINADA ESTA PARTE");


    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> registDestination(@RequestHeader Integer destinationId){
        Optional<Destination> oDestination = destinationRepository.findById(destinationId);
        if(oDestination.isPresent()){
            Destination destinationToDelete = oDestination.get();
            destinationToDelete.setState("D");
            destinationRepository.save(destinationToDelete);

            //---Añadir modificacion
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
            //INFORMACION DE LA MODIFICACION
            String modiDescription="Se permite eliminar (Cambio de estado a desactivado) un destino desde cualquier usuario.";
            String modi="Se eliminó el destino "+destinationToDelete.getName()+".";
            LocalDateTime localDateTime = LocalDateTime.now();
            Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
            String modiName="DELETE-DESTINATION";
            //----------------------------------
            Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
            modificationsRepository.save(modifications);

            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }
}
