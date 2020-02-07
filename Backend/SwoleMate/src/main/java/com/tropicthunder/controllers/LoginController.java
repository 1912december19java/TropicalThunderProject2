package com.tropicthunder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Exercise;
import com.tropicthunder.services.AthleteService;
import com.tropicthunder.services.CoachService;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

	@Autowired
	private AthleteService aService;

	@Autowired
	private CoachService cService;

	@GetMapping
	public String getItem(@RequestParam String user, @RequestParam String email, @RequestParam String password) {
		switch (user) {
		case "Athlete":
			return matchPassword(email, password) ? authAthlete(email).getName()
					: "{ \"message\": \"Email or password invalid\" }";
		case "Coach":
			return matchPassword(email, password) ? authCoach(email).toString()
					: "{ \"message\": \"Email or password invalid\" }";
		default:
			return "{ \"message\": \"Something wrong while fetching data\" }";

		}
	}

	private Athlete authAthlete(String email) {
		return aService.getByEmail(email);
	}

	private Coach authCoach(String email) {
		return cService.getByEmail(email);
	}

	private Boolean matchPassword(String email, String paramPassword) {
		System.out.println(email + " " + paramPassword);
		Athlete at = aService.getByEmail(email);
		System.out.println(at);
		return at.getPassword() == paramPassword;
	}

}
