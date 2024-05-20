package com.xplorcolombia.xplorcolombia.controllers;


import com.xplorcolombia.xplorcolombia.dto.LodgingDTO;
import com.xplorcolombia.xplorcolombia.service.LodgingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lodging")
public class LodgingController {

    @Autowired
    private LodgingService lodging;
    private List<LodgingDTO> lstLodging;

    @PostMapping(value = "/getHotels")
    public ResponseEntity<?>seeHotels(@RequestBody String destination){
        lstLodging = lodging.seeHotels(destination);

        return ResponseEntity.ok().body(lstLodging);
    }
}
