package com.example.demo.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue
    private int bid;
    private String name;
    private String eventname;
    private String address;
    private String phonenumber;
    private String email;
    private String date;
    private String time;
    private int numberofperson;
    private String food;
    private List<String> add_ons;

    public int getBid() {
        return bid;
    }
    public void setBid(int bid) {
        this.bid = bid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEventname() {
        return eventname;
    }
    public void setEventname(String eventname) {
        this.eventname = eventname;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhonenumber() {
        return phonenumber;
    }
    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public int getNumberofperson() {
        return numberofperson;
    }
    public void setNumberofperson(int numberofperson) {
        this.numberofperson = numberofperson;
    }
    public String getFood() {
        return food;
    }
    public void setFood(String food) {
        this.food = food;
    }
    public List<String> getAdd_ons() {
        return add_ons;
    }
    public void setAdd_ons(List<String> add_ons) {
        this.add_ons = add_ons;
    }
}
