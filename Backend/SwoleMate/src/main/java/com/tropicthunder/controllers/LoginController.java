package com.tropicthunder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	private  CoachService cService;

	@GetMapping("{user}&{email}&{password}")
	public String getItem(@PathVariable String user, @PathVariable String email, @PathVariable String password) {

		System.out.println("from [getItem()] : " + user + " : " + email + " : " + password + "");
		String[] pwStrArr = password.split("=");
		String pwStrVal = pwStrArr[1];
		String[] emailStrPair = email.split("=");
		String emailStrVal = emailStrPair[1];
		
	
		System.out.println("[pwStrVal : emailStrVal] :: " + pwStrVal + " : " + emailStrVal);
//		return athleteService.get(1).getName();
		switch (user.split("=")[1]) {
		case "Athlete":
//			System.out.println(authAthlete(emailStrVal).getName());
			return matchPassword(emailStrVal, pwStrVal) ? authAthlete(emailStrVal).getName() : null;
		case "Coach":
			return matchPassword(emailStrVal, pwStrVal) ? authCoach(emailStrVal).toString() : null;
		default:
			return "{ \"message\": \"Email or password invalid\" }";

		}

	}

	private Athlete authAthlete(String email) {
		System.out.println("[authAthlete()]" + " :email: " + email);
		
		return aService.getByEmail(email);

	}

	private Coach authCoach(String email) {

		return cService.getByEmail(email);

	}

	private Boolean matchPassword(String email, String paramPassword) {
		System.out.println(email + " " + paramPassword);
		Athlete at = aService.getByEmail(email);
//		Athlete at = aService.get(1);
		System.out.println(at);
		return at.getPassword() == paramPassword;
	}

}

//@RequestMapping(value = "/{orderId}/items/{itemId}", method=RequestMethod.GET)
//@ResponseBody
//public String getItem(@PathVariable final String orderId, @PathVariable final String itemId) {
//  return "Order ID: " + orderId + ", Item ID: " + itemId;
//}
//}
