package com.tropicthunder.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Program;
import com.tropicthunder.repositories.CoachDaoImpl;

public class CoachService implements ModelService<Coach>{

  @Autowired
  private CoachDaoImpl coachDaoImpl;
  
  @Override
  public List getAll() {
    return null;
  }

  @Override
  public Coach get(int id) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public void saveOrUpdate(Coach coach) {
    coachDaoImpl.saveOrUpdate(coach);
  }
  
  public List<Athlete> getAthletes(int id){
    return coachDaoImpl.getAthletes(id);
  }
  
  public List<Program> getPrograms(int coachId, int athleteId) {
    return coachDaoImpl.getPrograms(coachId, athleteId);
  }
  
  public void saveOrUpdateProgram(Program program) {
    coachDaoImpl.saveOrUpdateProgram(program);
  }
  
  public void deleteProgram(Program program) {
    coachDaoImpl.deleteProgram(program);
  }
  
}