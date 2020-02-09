import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AthleteService } from "../athlete.service";
import { ExercisesService } from "..//exercises.service"
import { Coach } from '../coach';
import { Exercises } from '../exercises';
import { Athlete } from '../athlete';
import { Observable } from 'rxjs';
import { Coach } from "../coach";
import { Exercise } from "../exercise";
import { UserService } from "../user.service";

@Component({
  selector: "app-athlete-dashboard",
  templateUrl: "./athlete-dashboard.component.html",
  styleUrls: ["./athlete-dashboard.component.css"]
})
export class AthleteDashboardComponent implements OnInit {
  public isCollapsed = false;
  public athlete: Athlete;
  public exercise;
  public coachNum: number = 1
  public athleteNum: number = 1
  private Headers = new Headers({ 'content-type': 'application/json' })
  athleteInfo: Observable<Athlete>
  exerciseInfo: Observable<Exercises[]>

  constructor(private athleteService: AthleteService, private exerciseService: ExercisesService) { }
  //x = this.athlete.coach.id;
  //y = this.athlete.athleteId;
  ngOnInit() {

    this.athleteService.getAthlete()
      .subscribe(data => this.athlete = data);

    this.exercise = this.exerciseService.getExercises()
      .subscribe(data => this.exercise = data);

    this.reloadAthleteData();
  }

  reloadAthleteData() {
    this.athleteInfo = this.athleteService.getAthlete();
  }
  reloadExercisesData() {
    this.exerciseInfo = this.exerciseService.getExercises();
  }
  deleteCoach(id: number, id2: number) {
    console.log(this.athlete.coach.id + "/" + this.athlete.athleteId);
    this.athleteService.deleteCoach(id, id2).subscribe(
      data => {
        this.reloadAthleteData();
      }
    )
  }
}
