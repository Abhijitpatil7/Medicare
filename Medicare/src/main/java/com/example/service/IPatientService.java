package com.example.service;

import java.util.List;

import com.example.pojo.Disease;
import com.example.pojo.Patient;
import com.example.pojo.Reminder;

public interface IPatientService  {
	Patient registerUser(Patient request);

	Patient getLogin(String email, String password);

	

	Disease putComplaint(Disease disease);

	Reminder putReminder(Reminder reminder);

	List<Reminder> allReminders();

	List<Disease> allDisease();

	
}
