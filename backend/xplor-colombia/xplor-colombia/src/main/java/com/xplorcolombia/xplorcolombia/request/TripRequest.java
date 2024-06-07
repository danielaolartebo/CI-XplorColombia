package com.xplorcolombia.xplorcolombia.request;

import java.util.List;

public class TripRequest {
    private Integer nitCustomer;
    private String nameCustomer;
    private String emailCustomer;
    private int numPeople;
    private List<DestinationRequest> destinations;
    private String currentDestination;
    private String state;

    public TripRequest(String currentDestination, List<DestinationRequest> destinations, String emailCustomer, String nameCustomer, Integer nitCustomer, int numPeople, String state) {
        this.currentDestination = currentDestination;
        this.destinations = destinations;
        this.emailCustomer = emailCustomer;
        this.nameCustomer = nameCustomer;
        this.nitCustomer = nitCustomer;
        this.numPeople = numPeople;
        this.state = state;
    }

    public String getCurrentDestination() {
        return currentDestination;
    }

    public void setCurrentDestination(String currentDestination) {
        this.currentDestination = currentDestination;
    }

    public List<DestinationRequest> getDestinations() {
        return destinations;
    }

    public void setDestinations(List<DestinationRequest> destinations) {
        this.destinations = destinations;
    }

    public String getEmailCustomer() {
        return emailCustomer;
    }

    public void setEmailCustomer(String emailCustomer) {
        this.emailCustomer = emailCustomer;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public Integer getNitCustomer() {
        return nitCustomer;
    }

    public void setNitCustomer(Integer nitCustomer) {
        this.nitCustomer = nitCustomer;
    }

    public int getNumPeople() {
        return numPeople;
    }

    public void setNumPeople(int numPeople) {
        this.numPeople = numPeople;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}

