import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AthleteService } from "../athlete.service";
import { Coach } from '../coach';
import { Exercise} from '../exercise'
import { UserService } from '../user.service';
import { Athlete } from '../athlete';
import { Program } from '../program';

@Component({
  selector: "app-athlete-workout",
  templateUrl: "./athlete-workout.component.html",
  styleUrls: ["./athlete-workout.component.css"]
})
export class AthleteWorkoutComponent implements OnInit {
  public isCollapsed:boolean = false;
  public athlete;
  public programs;
  public program;

  constructor(private athleteService : AthleteService, private userService: UserService) {}

  ngOnInit() {
    
    this.athlete = this.athleteService.getAthlete(this.userService.loggedInUser.id)
      .subscribe(data => this.athlete = data);
    
    this.programs = this.athleteService.getProgram()
      .subscribe(data => this.programs = data);

    this.program = this.athleteService.getCurrentProgram(this.athlete.id)
      .subscribe(data => this.program = data);
    
  }

  programComplete(){
    this.program.isComplete = true;
    this.program.isActive = false;
    this.athleteService.updateProgram(this.program);
  }
}