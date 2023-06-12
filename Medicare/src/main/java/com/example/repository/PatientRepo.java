package com.example.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pojo.Disease;
import com.example.pojo.Patient;

public interface PatientRepo extends JpaRepository<Patient, Long> {

	Optional<Patient> findByEmailAndPassword(String email, String password);

	

}
