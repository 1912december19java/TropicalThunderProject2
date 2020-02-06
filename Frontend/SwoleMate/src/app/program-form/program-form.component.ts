import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Exercise } from "../exercise";
import { WorkoutService } from "../workout.service";

@Component({
  selector: "app-program-form",
  templateUrl: "./program-form.component.html",
  styleUrls: ["./program-form.component.css"]
})
export class ProgramFormComponent implements OnInit {
  frequency: Array<Exercise> = [];
  freq: number;

  updateFrequency(freq: number): void {
    this.frequency = [];
    for (let index = 0; index < freq; index++) {
      this.frequency.push(new Exercise());
    }
  }

  getFrequency(): void {
    this.workoutService
      .getFrequency()
      .subscribe(frequency => (this.freq = frequency));

    this.updateFrequency(this.freq);
  }

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.getFrequency();
  }
}
