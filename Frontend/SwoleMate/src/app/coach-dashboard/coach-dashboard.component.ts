import { Component, OnInit } from "@angular/core";


import { Athlete } from '../athlete';
import { CoachServiceService } from '../coach.service';
import { Coach } from '../coach';
import { Program } from '../program';
import { Router } from '@angular/router';


@Component({
  selector: "app-coach-dashboard",
  templateUrl: "./coach-dashboard.component.html",
  styleUrls: ["./coach-dashboard.component.css"]
})
export class CoachDashboardComponent implements OnInit {
  public isCollapsed = false;

  athletes: Array<Athlete> = [];

  coachId: number;

  programs: Program[] = [];


  currentUser: Coach = new Coach();

  constructor(private coachService: CoachServiceService, private router: Router) { }

  async getAthletes() {
    let athletes = await this.coachService.getAthletes(this.coachId);
    let i:number = 0;
    for (let athlete of athletes) {
      let a = new Athlete("","","","","");
      a.athleteId = athlete[0];
      a.name = athlete[2];
      a.email = athlete[3];
      this.athletes.push(a);
    }
    console.log(this.athletes);
  }

  async getProgram(athleteId: number) {
    this.programs = await this.coachService.getPrograms(athleteId, this.coachId);
  }

  async get() {
    this.currentUser = await this.coachService.get(this.coachId);
    this.currentUser.password = '';
  }

  deleteAthlete(id: number) {
    this.coachService.deleteAthlete(this.coachId, id);
  }

  updateProgram(program: Program) {
    this.coachService.updateProgram(program);
  }

  createProgram(athleteId: number) {
    localStorage.setItem('athleteId', athleteId.toString());
  }

  ngOnInit() {
    this.coachId = +localStorage.getItem('id');
    console.log(this.coachId);
    this.get();
    this.getAthletes();
    this.router.navigate([{ outlets: { popup: null } }]);

  }
}
