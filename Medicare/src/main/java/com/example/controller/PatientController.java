package com.example.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.pojo.Disease;
import com.example.pojo.Patient;
import com.example.pojo.Reminder;

import com.example.service.IPatientService;

@RequestMapping("/")
@CrossOrigin(origins = "*")
@RestController
public class PatientController {
	
	@Autowired
	private IPatientService patientService;
	
	

	@PostMapping("register")
	public ResponseEntity<?> patientRegistration(@RequestBody Patient request){
		return ResponseEntity.ok(patientService.registerUser(request));
}
	
	
	@PostMapping("signin")
	public ResponseEntity<?> userLogin(@RequestBody Patient request){
		String email = request.getEmail();
		String password = request.getPassword();
		Patient patient=null;
		patient = patientService.getLogin(email,password);
		return ResponseEntity.ok(patient);
	}

	@PostMapping("adddisease")
	public ResponseEntity<?> addDisease(@RequestBody Disease disease){
			return ResponseEntity.ok(patientService.putComplaint(disease));
	}
	
	
	
	@PostMapping("addreminder")
	public ResponseEntity<?> addReminder(@RequestBody Reminder reminder){
			return ResponseEntity.ok(patientService.putReminder(reminder));
	}
	
	@GetMapping("showreminder")
	public ResponseEntity<List<Reminder>> getComplaint() {
		List<Reminder> comps = patientService.allReminders();
		return ResponseEntity.ok(comps);
	}
	
	@GetMapping("showdisease")
	public ResponseEntity<List<Disease>> getDisease() {
		List<Disease> comps = patientService.allDisease();
		return ResponseEntity.ok(comps);
	}
	
}
