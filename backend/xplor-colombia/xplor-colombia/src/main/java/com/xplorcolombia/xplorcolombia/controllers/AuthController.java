package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.security.AuthResponse;
import com.xplorcolombia.xplorcolombia.security.JwtService;
import com.xplorcolombia.xplorcolombia.security.LoginRequest;
import com.xplorcolombia.xplorcolombia.security.RegisterRequest;
import com.xplorcolombia.xplorcolombia.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserAGRepository userAGRepository;
    @Autowired
    private JwtService jwtService;

    @PostMapping(value = "login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        //System.out.println("hola");
        //return ResponseEntity.ok(authService.login(request));
        String userAGEmail = request.getUsername();
        String userAGPassword = request.getPassword();
        System.out.println(userAGEmail);
        System.out.println(userAGPassword);


        String encodedPassword = passwordEncoder.encode(userAGPassword);

        System.out.println("Estamos en el loginn");
        System.out.println("Contraseña cifrada "+encodedPassword);
        //authService.login(request);

        Optional<UserAG> oUserAG = userAGRepository.findByEmail(userAGEmail);

        if (oUserAG.isPresent()){
            UserAG foundUserAG = oUserAG.get();
            //System.out.println(foundUserAG.getPassword());
            if(passwordEncoder.matches(userAGPassword, foundUserAG.getPassword())){
                System.out.println(foundUserAG.getName());
                //AuthResponse loginResponse = authService.login(request);
                //Map<String, Object> response = new HashMap<>();
                //response.put("loginResponse", loginResponse);
                //response.put("foundUserAG", foundUserAG);
                //return ResponseEntity.ok(response);
                if(foundUserAG.getState().equals("A")){
                    return ResponseEntity.ok(authService.login(request));
                }
                return ResponseEntity.status(401).body("Invalid user (status disabled).");
            }
            return ResponseEntity.status(401).body("Invalid password.");
        }
        return ResponseEntity.status(401).body("Invalid email");
    }
}