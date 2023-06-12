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

	public Reminder(Long id, LocalTime time, String medicinename, String description) {
		super();
		Id = id;
		this.time = time;
		this.medicinename = medicinename;
		this.description = description;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public String getMedicinename() {
		return medicinename;
	}

	public void setMedicinename(String medicinename) {
		this.medicinename = medicinename;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Reminder(LocalTime time, String medicinename, String description) {
		super();
		this.time = time;
		this.medicinename = medicinename;
		this.description = description;
	}

	public Reminder() {
		super();
	}
	
//	@ManyToOne
//	private Disease disease;
	
	
	
	
}
