package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Accommodation;
import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Meals;
import com.xplorcolombia.xplorcolombia.dto.AccommodationDTO;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.repository.AccommodationRepository;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.MealsRepository;
import com.xplorcolombia.xplorcolombia.service.AccommodationService;
import com.xplorcolombia.xplorcolombia.service.MealsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/meal")
public class MealController {

    @Autowired
    private MealsService mealsService;
    private List<MealsDTO> lstMeals;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private MealsRepository mealsRepository;

    @RequestMapping(value = "/PerDestination", method = RequestMethod.GET)
    public ResponseEntity<?> getMealPerDestination(@RequestHeader Integer idDestination){
        Optional<Destination> oDestination = destinationRepository.findById(idDestination);
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            lstMeals=mealsRepository.seeMealbyDestination(idDestination);
            if(lstMeals.isEmpty()){
                return ResponseEntity.status(400).body("No hay Comidas en la base de datos");
            }else{
                return ResponseEntity.status(200).body(lstMeals);
            }
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createMeal(@RequestBody Meals request){
        Optional<Destination> oDestination = destinationRepository.findById(request.getDestination().getId());
        if(oDestination.isPresent()){
            Destination destinationInRepository = oDestination.get();
            Meals meals = new Meals(request.getType(), request.getPrice(), request.getState(), destinationInRepository);
            mealsRepository.save(meals);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Destination not found.");
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteMeal(@RequestBody Integer idMeal){
        Optional<Meals> oMeals = mealsRepository.findById(idMeal);
        if(oMeals.isPresent()){
            Meals mealToDelete = oMeals.get();
            mealToDelete.setState("D");
            mealsRepository.save(mealToDelete);
            return ResponseEntity.status(200).body("Guardado correctamente");
        }
        return ResponseEntity.status(404).body("Meal not found.");
    }
}
