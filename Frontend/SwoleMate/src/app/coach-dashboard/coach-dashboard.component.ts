import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Athlete } from '../athlete';
import { CoachServiceService } from '../coach.service';
import { Coach } from '../coach';
import { Program } from '../program';
import { Exercise } from '../exercise';
import { UserService } from '../user.service';

@Component({
  selector: "app-coach-dashboard",
  templateUrl: "./coach-dashboard.component.html",
  styleUrls: ["./coach-dashboard.component.css"]
})
export class CoachDashboardComponent implements OnInit {
  public isCollapsed = false;

  athletes: Athlete[] = [];

  coach: Coach;

  programs: Program[] = []

  constructor(private coachService: CoachServiceService, private userService: UserService) {}

  async getAthletes(){
    this.athletes =  await this.coachService.getAthletes(this.coach);
  }

  async getProgram(athleteId:number){
    this.programs = await this.coachService.getPrograms(athleteId, this.coach.id);
  }

  ngOnInit() {
    this.coach = new Coach();
    this.coach.name = this.userService.loggedInUser.name;
    this.coach.email = this.userService.loggedInUser.email;
    this.coach.id = this.userService.loggedInUser.id;
    this.getAthletes();
  }
}