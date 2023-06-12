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
	
	
	
	
public Disease(Disease disease) {
		
	}


public Disease(String diseasename, String medicinedescription) {
	super();
	this.diseasename = diseasename;
	this.medicinedescription = medicinedescription;
	
}


public Disease(Long id, String diseasename, String medicinedescription) {
	super();
	this.id = id;
	this.diseasename = diseasename;
	this.medicinedescription = medicinedescription;

	
}


public Disease() {
	super();
}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getDiseasename() {
	return diseasename;
}


public void setDiseasename(String diseasename) {
	this.diseasename = diseasename;
}


public String getMedicinedescription() {
	return medicinedescription;
}


public void setMedicinedescription(String medicinedescription) {
	this.medicinedescription = medicinedescription;
}

}
