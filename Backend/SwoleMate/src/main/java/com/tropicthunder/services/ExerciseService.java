package com.tropicthunder.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tropicthunder.models.Exercise;
import com.tropicthunder.repositories.ExerciseDaoImpl;

@Service
public class ExerciseService {

  @Autowired
  private ExerciseDaoImpl exerciseDao;

  public List<Exercise> getAll() {
    return exerciseDao.getAllexercises();
  }

  public Exercise get(int id) {
    return exerciseDao.getById(id);
  }

  public void save(Exercise exercise) {
    exerciseDao.save(exercise);
  }

  public void update(Exercise exercise) {
    exerciseDao.update(exercise);
  }

  public List<Exercise> getProgram(int id) {
    return exerciseDao.getProgram(id);
  }

  public void saveProgram(List<Exercise> exercises) {
    exerciseDao.save(exercises);
  }

  public void updateProgram(List<Exercise> exercises) {
    exerciseDao.save(exercises);
  }

}
