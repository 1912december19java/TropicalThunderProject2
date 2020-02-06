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

    // This endpoint accepts POST only if they're also sending JSON
    @PostMapping(consumes = "application/json")
    public Exercise create(Exercise exercise) {
        exerciseService.saveOrUpdate(exercise);
        return exercise;
    }

    @PutMapping(value = "/{id}", consumes = "application/json")
    public Exercise replace(@RequestBody Exercise exercise, @PathVariable int id) {
        exercise.setExercise_id(id);
        exerciseService.saveOrUpdate(exercise);
        return exercise;
    }
}