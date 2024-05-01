package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.dto.UserAGDTO;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.service.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserAGRepository userAGRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserAGDTO userAGDTO) {
        System.out.println("Estamos en el loginn");
        return null;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserAGDTO userAGDTO) {
        System.out.println("Estamos en el register");
        return null;
    }
}