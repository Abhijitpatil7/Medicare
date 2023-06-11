package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.example.pojo.Patient;
import com.example.repository.PatientRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PatientService implements IPatientService {

	@Autowired
	private PatientRepo repo;
	
	
	
	@Override
	public Patient registerUser(Patient request) {
		
		

		Patient patient=null;
		
		patient = new Patient(request.getFirstname(),request.getLastname(),request.getDateofbirth(),request.getEmail(),request.getGender(),request.getMobilenumber(),request.getPassword(),request.getDisease());
	
		
		 
		return repo.save(patient);
	}
}
