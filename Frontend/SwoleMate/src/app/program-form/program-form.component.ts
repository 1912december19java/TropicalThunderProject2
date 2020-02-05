import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.css']
})
export class ProgramFormComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
  }
}
