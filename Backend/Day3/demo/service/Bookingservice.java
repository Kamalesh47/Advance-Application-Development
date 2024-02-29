package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Booking;
import com.example.demo.repository.Bookingrepository;
import java.time.LocalDateTime;  
import java.time.format.DateTimeFormatter;  
@Service
public class Bookingservice {

    @Autowired
    private Bookingrepository bookrepo;

    public List<Booking> getAllBooking()
    {
        return bookrepo.findAll();
    }
    public String postBooking(Booking book)
    {
         if(bookrepo.save(book)!=null)
         {
            return "added";
         }
         return "error";
    }
    public List<Booking> getBookingByid(String email)
    {
        return bookrepo.findByemail(email);
    }
    public void deleteBooking(int id)
    {
         bookrepo.deleteById(id);
    }
    public Booking updateBook(Booking book)
    {
        return bookrepo.saveAndFlush(book);
    }
    public int pastevent(String email)
    {
        String date=java.time.LocalDate.now().toString();
        return bookrepo.pastevent(date,email);
    }
    public int futureevent(String email)
    {
        String date=java.time.LocalDate.now().toString();
        return bookrepo.futureevent(date,email);
    }
    public int totalevent(String email)
    {
        return bookrepo.totalevent(email);
    }
}
