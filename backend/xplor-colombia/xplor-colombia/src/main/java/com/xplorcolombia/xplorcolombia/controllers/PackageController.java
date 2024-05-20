package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.dto.PackageDTO;
import com.xplorcolombia.xplorcolombia.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/package")
public class PackageController {

    @Autowired
    private PackageService packages;
     private List<PackageDTO> lstPackage;

    @PostMapping(value = "/getPackage")
    public ResponseEntity<?> seePackage(){
        lstPackage = packages.seePackages();
        return ResponseEntity.ok().body(lstPackage);
    }

}
