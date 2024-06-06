package com.xplorcolombia.xplorcolombia.controllers;


import com.xplorcolombia.xplorcolombia.domain.Modifications;
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

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/modification")
@RequiredArgsConstructor
public class ModificationController {
    @Autowired
    private ModificationsRepository modificationsRepository;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllModifications() {
        List<Modifications> modifications = modificationsRepository.findAll();
        if (modifications.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(modifications);
    }
}
