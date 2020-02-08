import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from "./athlete"
import { Observable } from 'rxjs';
import {Exercise } from "./exercise"

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private baseUrl: string = "//ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/athlete/1";
  private exerciseUrl: string = "//ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/exercises/13"
  constructor(private http: HttpClient) { }

  getAthlete(): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseUrl);
  }

  getExercise(): Observable<Exercise> { 
    return this.http.get<Exercise>(this.exerciseUrl);
  }


}
