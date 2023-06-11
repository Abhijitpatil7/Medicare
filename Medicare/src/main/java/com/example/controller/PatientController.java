package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.pojo.Patient;
import com.example.service.IPatientService;

@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientController {
	
	@Autowired
	private IPatientService patientService;

	@PostMapping("register")
	public ResponseEntity<?> patientRegistration(@RequestBody Patient request){
		return ResponseEntity.ok(patientService.registerUser(request));
}
	
	
}
