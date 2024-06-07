package com.xplorcolombia.xplorcolombia.controllers;


import com.google.gson.Gson;
import com.xplorcolombia.xplorcolombia.domain.*;
import com.xplorcolombia.xplorcolombia.dto.CustomerDTO;
import com.xplorcolombia.xplorcolombia.dto.DestinationDTO;
import com.xplorcolombia.xplorcolombia.repository.*;
import com.xplorcolombia.xplorcolombia.request.DestinationRequest;
import com.xplorcolombia.xplorcolombia.request.TripRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/trip")
public class TripController {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private TransportationRepository transportationRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;
    @Autowired
    private MealsRepository mealsRepository;
    @Autowired
    private TripInsuranceRepository tripInsuranceRepository;
    @Autowired
    private TripDestinationRepository tripDestinationRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<?> createTrip(@RequestBody TripRequest request){
        Optional<CustomerDTO> existingCustomerOptional = customerRepository.findByNit(request.getNitCustomer());
        int numPeople = request.getNumPeople();
        List<DestinationRequest> lstDestinations = request.getDestinations();
        int size = lstDestinations.size();

        Date startDateTrip = null;
        Date endDateTrip = null;

        if (size > 1) {
            DestinationRequest firstDestination = lstDestinations.get(0);
            DestinationRequest lastDestination = lstDestinations.get(size - 1);

            startDateTrip = firstDestination.getStartDate();
            endDateTrip = lastDestination.getEndDate();
        } else if (size == 1) {
            startDateTrip = lstDestinations.get(0).getStartDate();
            endDateTrip = lstDestinations.get(0).getEndDate();
        }

        if(existingCustomerOptional.isPresent()) {
            Integer existingCustomerId = existingCustomerOptional.get().getId();
            Customer existingCustomer = customerRepository.findById(existingCustomerId).get();
            Trip trip=new Trip(existingCustomer, numPeople, "A", startDateTrip, endDateTrip);
            Trip tripSaved = tripRepository.save(trip);
            int id = tripSaved.getId();

            for (DestinationRequest destination : lstDestinations) {
                String jsonString = destination.getIdDestination();
                Gson gson = new Gson();
                DestinationDTO destino = gson.fromJson(jsonString, DestinationDTO.class);

                Integer destinationId = destino.getId();
                Optional<Destination> oDestination = destinationRepository.findById(destinationId);
                if (oDestination.isPresent()) {
                    Destination destinationSaved = oDestination.get();
                    Date startDate = destination.getStartDate();
                    Date endDate = destination.getEndDate();
                    int transportationId = destination.getTransportationOptions().getId();
                    Optional<Transportation> optionalTransportation = transportationRepository.findById(transportationId);
                    if (optionalTransportation.isPresent()) {
                        Transportation transportationSaved = optionalTransportation.get();
                        int accommodationId = destination.getAccommodationOptions().getId();
                        Optional<Accommodation> optionalAccommodation=accommodationRepository.findById(accommodationId);
                        if (optionalAccommodation.isPresent()) {
                            Accommodation accommodationSaved = optionalAccommodation.get();
                            int mealsId = destination.getMealOptions().getId();
                            Optional<Meals> optionalMeals = mealsRepository.findById(mealsId);
                            if (optionalMeals.isPresent()) {
                                Meals mealsSaved = optionalMeals.get();
                                int tripInsuranceId = destination.getTripInsuranceOptions().getId();
                                Optional<TripInsurance> optionalTripInsurance = tripInsuranceRepository.findById(tripInsuranceId);
                                if (optionalTripInsurance.isPresent()) {
                                    TripInsurance tripInsuranceSaved = optionalTripInsurance.get();
                                    boolean bothTransportationAndAccommodation = destination.isBothTransportation();
                                    TripDestination tripDestination = new TripDestination(tripSaved, destinationSaved, startDate, endDate, numPeople, transportationSaved, accommodationSaved, mealsSaved, tripInsuranceSaved, bothTransportationAndAccommodation);
                                    tripDestinationRepository.save(tripDestination);
                                }
                            }
                        }
                    }
                }
            }

            return ResponseEntity.ok().body("Guardado correctamente");
        } else {
            Customer customer = new Customer(request.getNameCustomer(), request.getEmailCustomer(), request.getNitCustomer(), "A");
            Customer savedCustomer = customerRepository.save(customer);
            Trip trip=new Trip(savedCustomer, numPeople, "A", startDateTrip, endDateTrip);
            Trip tripSaved = tripRepository.save(trip);
            int id = tripSaved.getId();

            for (DestinationRequest destination : lstDestinations) {
                String jsonString = destination.getIdDestination();
                Gson gson = new Gson();
                DestinationDTO destino = gson.fromJson(jsonString, DestinationDTO.class);

                Integer destinationId = destino.getId();
                Optional<Destination> oDestination = destinationRepository.findById(destinationId);
                if (oDestination.isPresent()) {
                    Destination destinationSaved = oDestination.get();
                    Date startDate = destination.getStartDate();
                    Date endDate = destination.getEndDate();
                    int transportationId = destination.getTransportationOptions().getId();
                    Optional<Transportation> optionalTransportation = transportationRepository.findById(transportationId);
                    if (optionalTransportation.isPresent()) {
                        Transportation transportationSaved = optionalTransportation.get();
                        int accommodationId = destination.getAccommodationOptions().getId();
                        Optional<Accommodation> optionalAccommodation=accommodationRepository.findById(accommodationId);
                        if (optionalAccommodation.isPresent()) {
                            Accommodation accommodationSaved = optionalAccommodation.get();
                            int mealsId = destination.getMealOptions().getId();
                            Optional<Meals> optionalMeals = mealsRepository.findById(mealsId);
                            if (optionalMeals.isPresent()) {
                                Meals mealsSaved = optionalMeals.get();
                                int tripInsuranceId = destination.getTripInsuranceOptions().getId();
                                Optional<TripInsurance> optionalTripInsurance = tripInsuranceRepository.findById(tripInsuranceId);
                                if (optionalTripInsurance.isPresent()) {
                                    TripInsurance tripInsuranceSaved = optionalTripInsurance.get();
                                    boolean bothTransportationAndAccommodation = destination.isBothTransportation();
                                    TripDestination tripDestination = new TripDestination(tripSaved, destinationSaved, startDate, endDate, numPeople, transportationSaved, accommodationSaved, mealsSaved, tripInsuranceSaved, bothTransportationAndAccommodation);
                                    tripDestinationRepository.save(tripDestination);
                                }
                            }
                        }
                    }
                }
            }
            return ResponseEntity.ok().body("Guardado correctamente");
        }
    }

    @GetMapping("/reservations")
    public ResponseEntity<?> getReservas() {
        List<TripDestination> reservas = tripDestinationRepository.findAll();
        List<Integer> listaIdDestinations = new ArrayList<>();
        for (TripDestination reserva : reservas) {
            listaIdDestinations.add(reserva.getDestination().getId());
        }
        System.out.println(listaIdDestinations);
        return ResponseEntity.ok().body(listaIdDestinations);
    }
}
