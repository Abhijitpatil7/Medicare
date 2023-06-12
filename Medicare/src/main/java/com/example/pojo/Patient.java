package com.example.pojo;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

import org.hibernate.annotations.Tables;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	private String firstname;
	
	private String lastname;
	
	private LocalDate dateofbirth;
	
	private String email;
	
	private String gender;
	
	private String mobilenumber;
	
	private String password; 
	
	

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public LocalDate getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(LocalDate dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Patient( String firstname, String lastname, LocalDate dateofbirth, String email, String gender,
			String mobilenumber, String password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.dateofbirth = dateofbirth;
		this.email = email;
		this.gender = gender;
		this.mobilenumber = mobilenumber;
		this.password = password;
		
	}
	
	

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Patient(Long id, String firstname, String lastname, LocalDate dateofbirth, String email, String gender,
			String mobilenumber, String password) {
		super();
		this.Id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dateofbirth = dateofbirth;
		this.email = email;
		this.gender = gender;
		this.mobilenumber = mobilenumber;
		this.password = password;
	
	}

	public Patient() {
		super();
	}


	
	




	
}
