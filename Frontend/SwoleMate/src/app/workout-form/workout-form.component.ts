import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Exercise } from "../exercise";

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {

  workoutForm = this.fb.group({workout: this.fb.array([])});

  constructor(private fb: FormBuilder) { }

  get workout() {
    return this.workoutForm.get('workout') as FormArray;
  }
  
  addExercise() {
    this.workout.push(this.fb.control(''));
  }

  
  ngOnInit() {
  }

}
