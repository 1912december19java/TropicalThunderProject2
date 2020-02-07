import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Athlete } from '../athlete';
import { CoachServiceService } from '../coach.service';
import { Coach } from '../coach';
import { Program } from '../program';
import { Exercise } from '../exercise';

@Component({
  selector: "app-coach-dashboard",
  templateUrl: "./coach-dashboard.component.html",
  styleUrls: ["./coach-dashboard.component.css"]
})
export class CoachDashboardComponent implements OnInit {
  public isCollapsed = false;

  athletes: Athlete[] = [];

  coach: Coach = new Coach();

  programs: Program[] = []

  constructor(private coachService: CoachServiceService) {}

  async getAthletes(){
    this.athletes =  await this.coachService.getAthletes(this.coach);
  }

  async getProgram(athleteId:number, coachId:number){
    this.programs = await this.coachService.getPrograms(athleteId, coachId);
  }

  ngOnInit() {
    this.coach
    this.getAthletes();
  }
}