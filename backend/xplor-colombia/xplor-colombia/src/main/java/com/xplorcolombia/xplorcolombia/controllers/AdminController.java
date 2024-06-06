package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Modifications;
import com.xplorcolombia.xplorcolombia.domain.Role;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.repository.ModificationsRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.time.LocalDateTime;
import java.time.ZoneId;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    @Autowired
    private final UserAGRepository userAGRepository;
    @Autowired
    private final AuthService authService;
    @Autowired
    private ModificationsRepository modificationsRepository;

    @GetMapping("/users")
    public ResponseEntity<List<UserAG>> getAllUsers() {
        List<UserAG> users = userAGRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/register")
    public ResponseEntity<UserAG> registerUser(@RequestBody UserAG user) {
        UserAG newUser = authService.register(user);

        //---Añadir modificacion
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        //INFORMACION DE LA MODIFICACION
        String modiDescription="Se permite registrar un nuevo usuario desde el usuario administrador.";
        String modi="Se registró el usuario "+user.getName()+".";
        LocalDateTime localDateTime = LocalDateTime.now();
        Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        String modiName="REGISTER-USERS-ADMIN";
        //----------------------------------
        Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
        modificationsRepository.save(modifications);

        return ResponseEntity.ok(newUser);
    }

    @PutMapping("/users/{id}/status")
    public ResponseEntity<?> updateUserStatus(@PathVariable Integer id, @RequestBody String status) {
        UserAG user = userAGRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        System.out.println("Estado recibido: '" + status + "'");
        user.setState(status);
        userAGRepository.save(user);

        //---Añadir modificacion
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserAG temporaryUser = userAGRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        //INFORMACION DE LA MODIFICACION
        String modiDescription="Se permite cambiar de estado a los usuarios desde el usuario administrador.";
        String modi="Se cambio el estado del usuario "+user.getName()+" a "+status+".";
        LocalDateTime localDateTime = LocalDateTime.now();
        Date modiDate = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        String modiName="STATUS-USERS-ADMIN";
        //----------------------------------
        Modifications modifications = new Modifications(modiDescription,modi,modiDate,modiName,temporaryUser);
        modificationsRepository.save(modifications);

        return ResponseEntity.ok().body("Usuario encontrado");
    }
}
