package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pojo.Disease;

public interface DiseaseRepo extends JpaRepository<Disease, Long> {

}
