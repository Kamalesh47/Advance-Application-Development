package com.security.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.security.security.entity.Bookentity;

@Repository
public interface Bookrepo extends JpaRepository<Bookentity, Long> {
    Bookentity findById(long id);
    // Bookentity findByName(String name);
    void deleteById(long id);
    // Other methods...

    // @Query(value="select * from bookevents where name=:name",nativeQuery=true)
	// public Bookentity findByName(@Param("name") String name);
    
}