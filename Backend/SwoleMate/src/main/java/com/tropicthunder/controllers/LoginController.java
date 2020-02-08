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
			returnString = "{ \"isLoggedIn\": true, \"routerLink\": \"athlete\", \"message\": \"Login successful\" }";
			return this.authAthlete(email, password) 
					? returnString
					: "{ \"message\": \"Email or password invalid\" }";
		case "Coach":
			returnString = "{ \"isLoggedIn\": true, \"routerLink\": \"coach\", \"message\": \"Login successful\" }";
			return this.authCoach(email, password) 
					? returnString
					: "{ \"message\": \"Email or password invalid\" }";
		default:
			return "{ \"message\": \"Something went wrong while fetching data\" }";
		}
	}

	private Boolean authAthlete(String email, String paramPassword) {
		try {
			Athlete athlete = athleteService.getByEmail(email);
			if (athlete.getPassword().equalsIgnoreCase(paramPassword)) {
				return true;
			}
		} catch (IndexOutOfBoundsException e) {
			return false;
		} catch (NullPointerException e) {
			return false;
		}
		return false;
	}

	private Boolean authCoach(String email, String paramPassword) {
		try {
			Coach coach = coachService.getByEmail(email);
			if (coach.getPassword().equalsIgnoreCase(paramPassword)) {
				return true;
			}
		} catch (IndexOutOfBoundsException e) {
			return false;
		} catch (NullPointerException e) {
			return false;
		}
		return false;
	}

}
