package com.tropicthunder.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Exercise;
import com.tropicthunder.models.Program;
import com.tropicthunder.services.CoachService;

@RestController
@RequestMapping("/coach")
@CrossOrigin
public class CoachController {

  @Autowired
  private CoachService coachService;


  @GetMapping("/{id}/athletes")
  public List<Athlete> getAthletes(@PathVariable int id) {
    return coachService.getAthletes(id);
  }

  @PostMapping(consumes = "application/json")
  @ResponseStatus(code = HttpStatus.CREATED)
  public void create(@RequestBody Coach coach) {
    coachService.saveOrUpdate(coach);
  }

  @GetMapping("/{id}")
  public Coach get(@PathVariable int id) {
    return coachService.get(id);
  }

  @PatchMapping(consumes = "application/json")
  public void update(@RequestBody Coach coach) {
    coachService.saveOrUpdate(coach);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable int id) {
    Coach coach = new Coach();
    coach.setId(id);
    coachService.delete(coach);
  }

  @PostMapping(path = "/program", consumes = "application/json")
  @ResponseStatus(code = HttpStatus.CREATED)
  public void createProgram(@RequestBody Program program) {
    coachService.saveOrUpdateProgram(program);
  }

  @PostMapping(path = "/program/exercises", consumes = "application/json")
  @ResponseStatus(code = HttpStatus.CREATED)
  public void createProgramExercises(@RequestBody List<Exercise> exercises) {
    coachService.createProgramExercises(exercises);
  }

  @GetMapping("/{coachId}/program/{athleteId}")
  public List<Program> getPrograms(@PathVariable int coachId, @PathVariable int athleteId) {
    System.out.println(coachService.getPrograms(coachId, athleteId).toString());
    return coachService.getPrograms(athleteId, coachId);
  }

  @PatchMapping("/program/update")
  public void updateProgram(@RequestBody Program program) {
    coachService.saveOrUpdateProgram(program);
  }

  @DeleteMapping("/program/{id}")
  public void deleteProgram(@PathVariable int id) {
    Program program = new Program();
    program.setProgramId(id);
    coachService.deleteProgram(program);
  }

  @PatchMapping("/{coachId}/{athleteId}")
  public void addAthlete(@PathVariable int coachId, @PathVariable int athleteId) {
    coachService.addAthlete(coachId, athleteId);
  }

  @DeleteMapping("/{coachId}/{athleteId}")
  public void deleteAthlete(@PathVariable int coachId, @PathVariable int athleteId) {
    coachService.deleteAthlete(athleteId);
  }
}
