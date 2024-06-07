package com.xplorcolombia.xplorcolombia.request;

import java.util.Date;

public class DestinationRequest {
    private String idDestination;
    private String name;
    private double basePrice;
    private Date startDate;
    private Date endDate;
    private int numDays;
    private boolean bothTransportation;
    private CategoryRequest transportationOptions;
    private CategoryRequest accommodationOptions;
    private CategoryRequest mealOptions;
    private CategoryRequest tripInsuranceOptions;


    public DestinationRequest(CategoryRequest accommodationOptions, double basePrice, boolean bothTransportation, Date endDate, String idDestination, CategoryRequest mealOptions, String name, int numDays, Date startDate, CategoryRequest transportationOptions, CategoryRequest tripInsuranceOptions) {
        this.accommodationOptions = accommodationOptions;
        this.basePrice = basePrice;
        this.bothTransportation = bothTransportation;
        this.endDate = endDate;
        this.idDestination = idDestination;
        this.mealOptions = mealOptions;
        this.name = name;
        this.numDays = numDays;
        this.startDate = startDate;
        this.transportationOptions = transportationOptions;
        this.tripInsuranceOptions = tripInsuranceOptions;
    }

    public CategoryRequest getAccommodationOptions() {
        return accommodationOptions;
    }

    public void setAccommodationOptions(CategoryRequest accommodationOptions) {
        this.accommodationOptions = accommodationOptions;
    }

    public double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(double basePrice) {
        this.basePrice = basePrice;
    }

    public boolean isBothTransportation() {
        return bothTransportation;
    }

    public void setBothTransportation(boolean bothTransportation) {
        this.bothTransportation = bothTransportation;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getIdDestination() {
        return idDestination;
    }

    public void setIdDestination(String idDestination) {
        this.idDestination = idDestination;
    }

    public CategoryRequest getMealOptions() {
        return mealOptions;
    }

    public void setMealOptions(CategoryRequest mealOptions) {
        this.mealOptions = mealOptions;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumDays() {
        return numDays;
    }

    public void setNumDays(int numDays) {
        this.numDays = numDays;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public CategoryRequest getTransportationOptions() {
        return transportationOptions;
    }

    public void setTransportationOptions(CategoryRequest transportationOptions) {
        this.transportationOptions = transportationOptions;
    }

    public CategoryRequest getTripInsuranceOptions() {
        return tripInsuranceOptions;
    }

    public void setTripInsuranceOptions(CategoryRequest tripInsuranceOptions) {
        this.tripInsuranceOptions = tripInsuranceOptions;
    }
}