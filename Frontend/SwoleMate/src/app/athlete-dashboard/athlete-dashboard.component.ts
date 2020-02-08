import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AthleteService } from "../athlete.service";
import { Coach } from '../coach';
import { Exercise} from '../exercise'

@Component({
  selector: "app-athlete-dashboard",
  templateUrl: "./athlete-dashboard.component.html",
  styleUrls: ["./athlete-dashboard.component.css"]
})
export class AthleteDashboardComponent implements OnInit {
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
   