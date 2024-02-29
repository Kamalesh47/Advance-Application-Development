package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    private String email;
    private String name;
    private String phonenumber;
    private String message;

    
    // public String getEmail() {
    //     return email;
    // }
    // public void setEmail(String email) {
    //     this.email = email;
    // }
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public String getPhonenumber() {
    //     return phonenumber;
    // }
    // public void setPhonenumber(String phonenumber) {
    //     this.phonenumber = phonenumber;
    // }
    // public String getMessage() {
    //     return message;
    // }
    // public void setMessage(String message) {
    //     this.message = message;
    // }
    // public int getCid() {
    //     return cid;
    // }
    // public void setCid(int cid) {
    //     this.cid = cid;
    // }
    
    
}
