import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Athlete } from '../athlete';
import { CoachServiceService } from '../coach.service';
import { Coach } from '../coach';
import { Program } from '../program';
import { Exercise } from '../exercise';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-coach-dashboard",
  templateUrl: "./coach-dashboard.component.html",
  styleUrls: ["./coach-dashboard.component.css"]
})
export class CoachDashboardComponent implements OnInit {
  public isCollapsed = false;

  athletes: Athlete[] = [];

  coachId:number;

  programs: Program[] = []

  currentUser: Coach;

  constructor(private coachService: CoachServiceService, private router: Router) {}

  async getAthletes(){
    this.athletes =  await this.coachService.getAthletes(this.coachId);
  }

  async getProgram(athleteId:number){
    this.programs = await this.coachService.getPrograms(athleteId, this.coachId);
  }

  async get(){
    this.currentUser = await this.coachService.get(this.coachId);
    this.currentUser.password = '';
  }

  deleteAthlete(id:number){
    this.coachService.deleteAthlete(this.coachId, id);
  }

  updateProgram(program:Program){
    this.coachService.updateProgram(program);
  }

  createProgram(athleteId:number){
    localStorage.setItem('athleteId', athleteId.toString());
  }

  ngOnInit() {
   // this.coachId = +localStorage.getItem('id');
    //this.getAthletes();
   // this.get();
   this.router.navigate([{ outlets: { popup: null }}]);
this.currentUser = new Coach();
this.athletes = new Array ();
this.currentUser.name = 'joey flexx';
this.currentUser.email = 'theschoolof@flexx.com';
this.athletes.push(new Athlete());
this.athletes.push(new Athlete());
this.athletes.push(new Athlete());
this.athletes.push(new Athlete());
this.athletes[0].name = 'russ';
this.athletes[1].name = 'amanda';
this.athletes[2].name = 'sean';
this.athletes[3].name = 'daniella';

  }
}