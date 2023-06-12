package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.example.custom_exceptiom.ResourceNotFoundException;
import com.example.pojo.Disease;
import com.example.pojo.Patient;
import com.example.pojo.Reminder;
import com.example.repository.DiseaseRepo;
import com.example.repository.PatientRepo;
import com.example.repository.ReminderRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PatientService implements IPatientService {

	@Autowired
	private PatientRepo repo;
	
	@Autowired
	private DiseaseRepo drepo;
	

	@Autowired
	private ReminderRepo rrepo;
	
	
	
	@Override
	public Patient registerUser(Patient request) {
		
		

		Patient patient=null;
		
		patient = new Patient(request.getFirstname(),request.getLastname(),request.getDateofbirth(),request.getEmail(),request.getGender(),request.getMobilenumber(),request.getPassword());
	
		return repo.save(patient);
	}



	@Override
	public Patient getLogin(String email, String password) {
		Patient patient = repo.findByEmailAndPassword(email, password).orElseThrow(() -> new ResourceNotFoundException("Invalid credentials !! , User not found!!!!"));
		
		return patient;
	}



	@Override
	public Disease putComplaint(Disease disease) {

//		Patient patient = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("No User Found"));
		Disease dis =new Disease(disease.getDiseasename(),disease.getMedicinedescription());
		return drepo.save(dis);
	}



	@Override
	public Reminder putReminder(Reminder reminder) {
	Reminder rem=new Reminder(reminder.getTime(), reminder.getDescription(), reminder.getDescription());
		return rrepo.save(rem);
	}



	@Override
	public List<Reminder> allReminders() {

		return rrepo.findAll();
	}



	@Override
	public List<Disease> allDisease() {
		
		return drepo.findAll();
	}
	
	
	

	
	
}
