package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Booking;

@Repository
public interface Bookingrepository extends JpaRepository<Booking,Integer> {

    @Query(value = "SELECT * FROM booking WHERE email=?", nativeQuery = true)
    public List<Booking> findByemail(String email);

    @Query(value ="select count(bid) from booking where date<? and email=?",nativeQuery=true)
    public int pastevent(String date,String email);
    @Query(value ="select count(bid) from booking where date>? and email=?",nativeQuery=true)
    public int futureevent(String date,String email);

    @Query(value ="select count(bid) from booking where email=?",nativeQuery=true)
    public int totalevent(String email);

}
