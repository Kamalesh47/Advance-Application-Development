package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Booking;
import com.example.demo.service.Bookingservice;

@RestController
@CrossOrigin
public class Bookingcontroller {

    @Autowired
    private Bookingservice bookservice;

    @GetMapping("/getBooking")
    public List<Booking> getAllBooking()
    {
        return bookservice.getAllBooking();
    }

    @PostMapping("/postBooking")
    public String postBooking(@RequestBody Booking book)
    {
        return bookservice.postBooking(book);
    }
    
     @PutMapping("/updateBooking")
    public Booking updateBook(@RequestBody Booking book)
    {
        return bookservice.updateBook(book);
    }
    @GetMapping("/getBookingByid/{email}")
    public List<Booking> getBookingByid(@PathVariable String email)
    {
        return bookservice.getBookingByid(email);
    }

    @DeleteMapping("/deleteBooking/{id}")
    public void deleteBooking(@PathVariable int id)
    {
        bookservice.deleteBooking(id);
    }
    
    @GetMapping("/gettotalevent/{email}")
    public int getTotalevent(@PathVariable String email)
    {
        return bookservice.totalevent(email);
    }
    @GetMapping("/getpastevent/{email}")
    public int getpastevent(@PathVariable String email)
    {
        return bookservice.pastevent(email);
    }
    @GetMapping("/getfutureevent/{email}")
    public int getfutureevent(@PathVariable String email)
    {
        return bookservice.futureevent(email);
    }
}
