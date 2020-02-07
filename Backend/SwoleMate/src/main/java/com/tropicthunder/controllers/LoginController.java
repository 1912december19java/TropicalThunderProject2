package com.tropicthunder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.services.AthleteService;
import com.tropicthunder.services.CoachService;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

	@Autowired
	private AthleteService athleteService;

	@Autowired
	private CoachService coachService;

	@GetMapping
	public String getItem(@RequestParam String user, @RequestParam String email, @RequestParam String password) {
		String returnString = "{}";
		switch (user) {
		case "Athlete":
			returnString = "{ \"isLoggedIn\": true, \"path\": \"/athlete\", \"message\": \"Login successful\" }";
			return this.authAthlete(email, password) 
					? returnString
					: "{ \"message\": \"Email or password invalid\" }";
		case "Coach":
			returnString = "{ \"isLoggedIn\": true, \"path\": \"/coach\", \"message\": \"Login successful\" }";
			return this.authCoach(email, password) 
					? returnString
					: "{ \"message\": \"Email or password invalid\" }";
		default:
			return "{ \"message\": \"Something went wrong while fetching data\" }";
		}
	}

	private Boolean authAthlete(String email, String paramPassword) {
		Athlete athlete = athleteService.getByEmail(email);
		return athlete.getPassword().equalsIgnoreCase(paramPassword);
	}

	private Boolean authCoach(String email, String paramPassword) {
		Coach coach= coachService.getByEmail(email);
		return coach.getPassword().equalsIgnoreCase(paramPassword);
	}

}
