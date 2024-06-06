package com.xplorcolombia.xplorcolombia.service;


import com.xplorcolombia.xplorcolombia.domain.Role;
import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.repository.RoleRepository;
import com.xplorcolombia.xplorcolombia.repository.UserAGRepository;
import com.xplorcolombia.xplorcolombia.security.AuthResponse;
import com.xplorcolombia.xplorcolombia.security.JwtService;
import com.xplorcolombia.xplorcolombia.security.LoginRequest;
import com.xplorcolombia.xplorcolombia.security.RegisterRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserAGRepository userAGRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userAGRepository.findByEmail(request.getUsername()).orElseThrow();
        System.out.println("pepe "+user.getUsername());
        System.out.println("pepe "+user.getPassword());
        System.out.println("pepe "+user.getAuthorities());
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public UserAG register(UserAG user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role defaultRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        user.setRole(defaultRole);
        return userAGRepository.save(user);
    }

}