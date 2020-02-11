import { Component, OnInit } from "@angular/core";


import { Athlete } from '../athlete';
import { CoachServiceService } from '../coach.service';
import { Coach } from '../coach';
import { Program } from '../program';
import { Router } from '@angular/router';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise';


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

  programExercises: Exercise[] = [];


  currentUser: Coach = new Coach();

  constructor(private coachService: CoachServiceService, private router: Router, private exercisesService: ExercisesService) { }

  newProgram: boolean = false;
  async getAthletes() {
    let athletes = await this.coachService.getAthletes(this.coachId);
    for (let athlete of athletes) {
      let a = new Athlete();
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
    this.exercisesService.updateProgramExercises(program.programExercises);
  }

  createProgram(athleteId: number) {
    localStorage.setItem('athleteId', athleteId.toString());
  }

  getProgramExercises(id: number) {
    this.exercisesService.getProgram(id).subscribe(
      data => {
        let programExercises = data;
        for (let exercise of programExercises) {
          let e = new Exercise();
          e.exerciseId = exercise[0];
          e.program.programId = exercise[1];
          e.exerciseSets = exercise[2];
          e.exerciseReps = exercise[3];
          e.exerciseName = exercise[4];
          e.exerciseDay = exercise[5];
          e.coachNotes = exercise[6];
          e.athleteNotes = exercise[7];
          e.exerciseUrl = exercise[8];
          e.isComplete = exercise[9];
          e.exerciseLoad = exercise[10];
          this.programExercises.push(e);
        }
      }
    );
  }

  ngOnInit() {
    this.coachId = +localStorage.getItem('id');
    console.log(this.coachId);
    this.get();
    this.getAthletes();
  }

  makeProgram() {
    this.newProgram = !this.newProgram;
  }
}
