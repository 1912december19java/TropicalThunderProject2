package com.tropicthunder.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Program;
import com.tropicthunder.repositories.AthleteDaoImpl;

@Service
public class AthleteService implements ModelService<Athlete> {

  @Autowired
  private AthleteDaoImpl athleteDao;

  public Athlete getByEmail(String email) {
    return athleteDao.getByEmail(email);
  }

  @Override
  public List<Athlete> getAll() {
    return athleteDao.getAllAthlete();
  }

  @Override
  public Athlete get(int id) {
    return athleteDao.getById(id);
  }

  @Override
  public void saveOrUpdate(Athlete t) {
    athleteDao.saveOrUpdate(t);
  }

  @Override
  public Integer save(Athlete t) {
    return athleteDao.save(t);
  }

  @Override
  public void update(Athlete t) {
    athleteDao.update(t);
  }

  @Override
  public void delete(Athlete t) {
    athleteDao.delete(t);
  }

  public List<Program> getPrograms(int coachId, int athleteId) {
    return athleteDao.getPrograms(coachId, athleteId);
  }

  public Coach getCoach(int id) {
    return athleteDao.getCoach(id);
  }

  public void saveOrUpdateProgram(Program program) {
    athleteDao.saveOrUpdateProgram(program);
  }

  public Program getCurrentProgram(int athleteId) {
    return athleteDao.getCurrentProgram(athleteId);
  }
}
