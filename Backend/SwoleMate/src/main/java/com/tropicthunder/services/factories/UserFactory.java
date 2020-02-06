package com.tropicthunder.services.factories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.services.AthleteService;
import com.tropicthunder.services.CoachService;

@Service
public class UserFactory {

	@Autowired
	private static AthleteService athleteService;

	@Autowired
	private static CoachService coachService;

	public String[] getUserInfo(String userType, String email) {

		switch (userType) {
		case "Athlete":
			String[] athleteInfo = {buildAthlete(email).getEmail(), buildAthlete(email).getPassword()};
			return athleteInfo;
		case "Coach":
			String[] coachInfo = {buildCoach(email).getEmail(), buildCoach(email).getPassword()};
			return coachInfo;
		default:
			String[] noUserInfo = {};
			return noUserInfo;
		}

	}

	private static Athlete buildAthlete(String email) {
		return athleteService.getByEmail(email);
	}

	private static Coach buildCoach(String email) {
		return coachService.getByEmail(email);
	}

}
