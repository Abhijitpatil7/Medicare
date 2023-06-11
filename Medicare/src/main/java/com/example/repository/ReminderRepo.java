package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pojo.Reminder;

public interface ReminderRepo extends JpaRepository<Reminder, Long>{

}
