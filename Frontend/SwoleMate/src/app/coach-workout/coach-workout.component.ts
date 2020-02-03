import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Exercise } from "../exercise";
import { ProgramFormComponent } from '../program-form/program-form.component';

@Component({
  selector: 'app-coach-workout',
  templateUrl: './coach-workout.component.html',
  styleUrls: ['./coach-workout.component.css']
})
export class CoachWorkoutComponent implements OnInit {
  
  layoutForm = this.fb.group({
    lengthInWeeks: [],
    frequency: []
  });
  lengthInWeeks: Array<Exercise>[] = [];
  pfc: ProgramFormComponent = new ProgramFormComponent();

  constructor(private fb: FormBuilder) { }
  workoutForm = this.fb.group({workout: this.fb.array([])});
  get workout() {
    return this.workoutForm.get('workout') as FormArray;
  }
  
  updateProgramLayout(){
    this.workout.clear();
    this.lengthInWeeks = [];
    for (let index = 0; index < this.layoutForm.get('lengthInWeeks').value; index++){
        this.lengthInWeeks.push(new Array<Exercise> ())
    }
    ProgramFormComponent.updateFrequency(this.layoutForm.get('frequency').value);
  }

  ngOnInit() {
  }
}