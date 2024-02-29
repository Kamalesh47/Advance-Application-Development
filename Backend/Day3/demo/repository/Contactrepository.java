package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Contact;

public interface Contactrepository extends JpaRepository<Contact, Long>
{

}
