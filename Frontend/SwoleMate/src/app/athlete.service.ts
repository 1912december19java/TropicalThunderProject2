import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Athlete } from "./athlete";
import { Coach } from './coach';
import { Exercise } from './exercise';
import { Program } from './program';

@Injectable({
  providedIn: 'root'
})



export class AthleteServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://ec2-35-175-147-247.compute-1.amazonaws.com:8085/athlete';
  //baseUrl = 'http://localhost:4200/SwoleMate/athlete';

  async getCoach(coach: Coach):Promise<Coach[]>{
    return this.http.get<Coach[]>(`${this.baseUrl}/${coach.id}/coach`)
    .toPromise();
  }

  async create(coach: Coach):Promise<number>{
    return this.http.post<number>(`${this.baseUrl}`, coach).toPromise();
  }

  async get(id:number):Promise<Coach>{
    return this.http.get<Coach>(`${this.baseUrl}/${id}`)
    .toPromise();
  }

  update(coach: Coach){
    return this.http.patch(`${this.baseUrl}/${coach.id}`, coach);
  }

  delete(id:number){
    this.http.delete<Coach>(`${this.baseUrl}/${id}`);
  }

  createProgram(program: Program):void{
    this.http.post(`${this.baseUrl}/program`, program);
  }

  async getPrograms(coachId:number, athleteId:number):Promise<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/program/${coachId}/${athleteId}`)
    .toPromise();
  }

  updateProgram(program: Program):void{
    this.http.patch(`${this.baseUrl}/program/update`, program)
  }

  deleteProgram(id:number):void{
    this.http.delete(`${this.baseUrl}/program/${id}`);    
  }

  addAthlete(coachId:number, athleteId:number){
    this.http.get(`${this.baseUrl}/${coachId}/${athleteId}`);
  }

  deleteAthlete(id:number){
    this.http.delete<Coach>(`${this.baseUrl}/${id}`);
  }
}
