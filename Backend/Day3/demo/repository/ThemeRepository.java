package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Themes;

public interface ThemeRepository extends JpaRepository<Themes,String>{

}
