import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  i:number = 0;
  workoutForm = this.fb.group({exercises: this.fb.array([])});

  get exercises() {
    return this.workoutForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.fb.control(''));
  }

  removeExercise() {
    this.exercises.removeAt(this.exercises.length-1);
  }
}
