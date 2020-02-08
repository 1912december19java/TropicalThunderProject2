import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AthleteService } from "../athlete.service";
import { Coach } from '../coach';
import { Exercise} from '../exercise'

@Component({
  selector: "app-athlete-workout",
  templateUrl: "./athlete-workout.component.html",
  styleUrls: ["./athlete-workout.component.css"]
})
export class AthleteWorkoutComponent implements OnInit {
  public isCollapsed = false;
  public athlete;
  public exercises;

  constructor(private athleteService : AthleteService) {}

  ngOnInit() {
    this.athlete = this.athleteService.getAthlete()
      .subscribe(data => this.athlete = data);
    
    this.exercises = this.athleteService.getExercise()
      .subscribe(data => this.exercises = data);
  }
}