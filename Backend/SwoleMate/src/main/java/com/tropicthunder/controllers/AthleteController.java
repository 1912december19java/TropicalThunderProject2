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

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Program;
import com.tropicthunder.services.ModelService;

@RestController
@RequestMapping("/athlete")
@CrossOrigin
public class AthleteController {

  @Autowired
  private ModelService<Athlete> AthleteService;

  @PostMapping(consumes = "application/json")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Integer create(@RequestBody Athlete athlete) {
    return AthleteService.save(athlete);
  }

  @GetMapping("/{id}")
  public Athlete get(@PathVariable int id) {
    return AthleteService.get(id);
  }

  @PatchMapping(consumes = "application/json")
  public void update(@RequestBody Athlete athlete) {
    AthleteService.update(athlete);
  }

  @GetMapping("/{coachId}/program/{athleteId}")
  public List<Program> getPrograms(@PathVariable int coachId, @PathVariable int athleteId) {
    return AthleteService.getPrograms(coachId, athleteId);
  }

  @GetMapping("/{id}/coach")
  public Coach getCoach(@PathVariable int id) {
    return AthleteService.getCoach(id);
  }

  @PatchMapping("/program")
  public void updateProgram(@RequestBody Program program) {
    AthleteService.saveOrUpdateProgram(program);
  }

  @GetMapping("/program/{id}")
  public Program getCurrentProgram(@PathVariable int id) {
    return AthleteService.getCurrentProgram(id);
  }
}
