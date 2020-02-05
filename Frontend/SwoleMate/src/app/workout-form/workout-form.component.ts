import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Exercise } from '../exercise';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  frequency:Array<Exercise> = [];
  ngOnInit() {
    this.frequency = this.getFrequency();
  }

  getFrequency(): Array<Exercise>{
    let freq:number;
    this.workoutService.getFrequency()
      .subscribe(frequency => freq = frequency);

    let frequency: Array<Exercise> = [];
    for (let index = 0; index < freq; index++) {
      frequency.push(new Exercise());
    }
    console.log(frequency.length)
    return frequency;
  }
}
