package com.example.pojo;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "reminder")
public class Reminder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	private LocalTime time;
	
	private String medicinename;
	
	private String description;
	
	@ManyToOne
	private Disease disease;
	
	
	
}
