package com.example.pojo;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;


@Entity
@Table(name = "disease")
public class Disease {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String diseasename;
	
	private String medicinedescription;
	
	@ManyToOne
	private Patient patient;
	
	@OneToMany(mappedBy = "disease", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Reminder> reminder;

}
