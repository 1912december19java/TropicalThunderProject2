import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from "./athlete"
import { Observable } from 'rxjs';
import { Program } from './program';
import { Coach } from './coach';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private baseUrl: string = "ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/athlete/";
  private exerciseUrl: string = "ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/exercises"
  constructor(private http: HttpClient) { }

  getAthlete(id:number): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseUrl + id);
  }

  getCoach(id:number): Observable<Coach> {
    return this.http.get<Coach>(this.baseUrl + id + '/coach');
  }

  getExercise(): Observable<Exercise> { 
    return this.http.get<Exercise>(this.exerciseUrl);
  }

  getProgram(): Observable<Program> { 
    return this.http.get<Program>(this.baseUrl);
  }

  updateProgram(program:Program): void { 
    this.http.patch(this.baseUrl + '/program', program);
  }

  getCurrentProgram(id:number): Observable<Program> { 
    return this.http.get<Program>(this.baseUrl + `/program/${id}`);
  }

}
