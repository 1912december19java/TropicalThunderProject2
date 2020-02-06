package com.tropicthunder.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.services.factories.UserFactory;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

	UserFactory userFactory;

	@PostMapping(consumes = "application/json", produces = "application/json")
	public String authenticateAthlete(@RequestBody Athlete athlete) {
		String userInfo[] = userFactory.getUserInfo("Athlete", athlete.getEmail());
		System.out.println(userInfo + " USERINFO from [LoginController.java]");
		Boolean hasUserInfo = userInfo.length > 0;
		Boolean emailMatches;
		Boolean passMatches;
		if (hasUserInfo) {
			
		}
		return "\"\": \"\"";
	}

}
