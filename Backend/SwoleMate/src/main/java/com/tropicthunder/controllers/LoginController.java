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
		switch (user) {
		case "Athlete":
			System.out.println("[LoginController] : this.matchPassword(email, password) : " + this.matchPassword(email, password));
			return this.matchPassword(email, password) 
					? this.getAthlete(email).toString()
					: "{ \"message\": \"Email or password invalid\" }";
		case "Coach":
			return this.matchPassword(email, password) 
					? this.getCoach(email).toString()
					: "{ \"message\": \"Email or password invalid\" }";
		default:
			return "{ \"message\": \"Something went wrong while fetching data\" }";
		}
	}

	private Athlete getAthlete(String email) {
		return athleteService.getByEmail(email);
	}

	private Coach getCoach(String email) {
		return coachService.getByEmail(email);
	}

	private Boolean matchPassword(String email, String paramPassword) {
		Athlete athlete = athleteService.getByEmail(email);
		System.out.println("[LoginController] : athlete.getPassword() : " + athlete.getPassword() + " : paramPassword : " + paramPassword);
		return athlete.getPassword().equalsIgnoreCase(paramPassword);
	}

}
