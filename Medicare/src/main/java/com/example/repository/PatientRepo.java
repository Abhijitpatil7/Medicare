package com.example.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pojo.Patient;

public interface PatientRepo extends JpaRepository<Patient, Long> {

}
