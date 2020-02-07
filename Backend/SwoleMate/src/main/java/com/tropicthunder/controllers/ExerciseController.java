package com.tropicthunder.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tropicthunder.models.Exercise;
import com.tropicthunder.services.ExerciseService;

@RestController
@RequestMapping("/exercises")
@CrossOrigin
public class ExerciseController {

	@Autowired
	private ExerciseService exerciseService;

	@GetMapping
	public List<Exercise> getAll() {
		System.out.println("here");
		return exerciseService.getAll();
	}

	@GetMapping("/{id}")
	public Exercise get(@PathVariable int id) {
		return exerciseService.get(id);
	}


	@PostMapping(consumes = "application/json")
	public Exercise create(@RequestBody Exercise exercise) {
		exerciseService.save(exercise);
		return exercise;
	}

	@PutMapping(consumes = "application/json")
	public Exercise update(@RequestBody Exercise exercise) {
		exerciseService.update(exercise);
		return exercise;
	}
}
