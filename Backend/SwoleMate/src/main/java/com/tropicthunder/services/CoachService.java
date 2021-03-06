package com.tropicthunder.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Exercise;
import com.tropicthunder.models.Program;
import com.tropicthunder.repositories.CoachDaoImpl;

@Service
public class CoachService implements ModelService<Coach> {

	@Autowired
	private CoachDaoImpl coachDaoImpl;
	
	public Coach getByEmail(String email) {
		return coachDaoImpl.getByEmail(email);
	}

	@Override
	public List<Coach> getAll() {
		return null;
	}

	@Override
	public Coach get(int id) {
		return coachDaoImpl.getById(id);
	}

	@Override
	public void saveOrUpdate(Coach coach) {
		coachDaoImpl.saveOrUpdate(coach);
	}
	
	@Override
	public void delete(Coach coach) {
		coachDaoImpl.delete(coach);
	}


	public List<Athlete> getAthletes(int id) {
		return coachDaoImpl.getAthletes(id);
	}

	public List<Program> getPrograms(int coachId, int athleteId) {
		return coachDaoImpl.getPrograms(coachId, athleteId);
	}

	public int saveOrUpdateProgram(Program program) {
		return coachDaoImpl.saveOrUpdateProgram(program);
	}

	public void deleteProgram(Program program) {
		coachDaoImpl.deleteProgram(program);
	}

	public void addAthlete(int coachId, int athleteId) {
		coachDaoImpl.addAthlete(coachId, athleteId);
	}

	public void deleteAthlete(int athleteId) {
		coachDaoImpl.deleteAthlete(athleteId);
	}
	
	public void createProgramExercises(List<Exercise> exercises) {
	  coachDaoImpl.createProgramExercises(exercises);
	}
}