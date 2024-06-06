package com.xplorcolombia.xplorcolombia.controllers;

import com.xplorcolombia.xplorcolombia.domain.Customer;
import com.xplorcolombia.xplorcolombia.domain.Destination;
import com.xplorcolombia.xplorcolombia.domain.Trip;
import com.xplorcolombia.xplorcolombia.domain.TripInsurance;
import com.xplorcolombia.xplorcolombia.dto.MealsDTO;
import com.xplorcolombia.xplorcolombia.dto.ReportDTO;
import com.xplorcolombia.xplorcolombia.dto.TripDTO;
import com.xplorcolombia.xplorcolombia.dto.TripDestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.DestinationRepository;
import com.xplorcolombia.xplorcolombia.repository.MealsRepository;
import com.xplorcolombia.xplorcolombia.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/trip")
public class TripController {

    @Autowired
    private DestinationService destination;

    @Autowired
    private TransportationService transportation;

    @Autowired
    private TripDestinationService tripDestination;

    @Autowired
    private MealsService meal;

    @Autowired
    private AccommodationService accommodation;

    @Autowired
    private CustomerService customer;

    @Autowired
    private TripService trip;

    @Autowired
    private TripInsuranceService insure;
    private List<ReportDTO> lstRep;
    private List<TripDTO> lstTrip;

    private List<TripDestinationDTO> lstDest;

    public class TripController(){


        @RequestMapping(value = "/PerClient", method = RequestMethod.GET)
        public ResponseEntity<?> getMealPerDestination(@RequestHeader Integer idDestination){

            if(customer.findById(idDestination).isPresent() ){
                Customer cust = customer.findById(idDestination).get();

                if(!trip.seeTripPerClient(idDestination).isEmpty()){
                    lstTrip = trip.seeTripPerClient(idDestination);
                    lstRep = null;

                    for(TripDTO opt:lstTrip){
                        lstDest = tripDestination.seeTripDestPerClient(opt.getId());

                        ReportDTO report = new ReportDTO();
                        for(TripDestinationDTO topt:lstDest){
                            report.setNameCustomer(cust.getName());
                            report.setId(String.valueOf(cust.getId()));
                            report.setEmail(cust.getEmail());
                            report.setDestination(destination.seeDestinationPerTripDestination(topt.getId()).getNameD());
                            report.setStartDate(topt.getStartDate());
                            report.setEndDate(topt.getEndDate());
                            report.setNum_people(topt.getNumPeople());
                            report.setAccommodation(accommodation.seeAccommodationPerTripDestination(topt.getId()).getName());
                            report.setMeal(meal.seeMealsPerTripDestination(topt.getId()).getType());
                            report.setTransportation(transportation.seeTransportationPerTripDestination(topt.getId()).getName());
                            report.setInsurance(insure.seeTripInsurancePerTripDestination(topt.getId()).getType());
                        }
                        lstRep.add(report);

                    }
                    return ResponseEntity.status(200).body(lstRep);

                }
                else
                    return ResponseEntity.status(400).body("El cliente no tiene reservas disponibles");

            }
            else
                return ResponseEntity.status(400).body("No existe un cliente con esta identificación");

        }

        @RequestMapping(value = "/addTrip", method = RequestMethod.POST)
        public ResponseEntity<?> getMealPerDestination(@RequestHeader TripDestination trip){
            
        }
    }
}
