import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Athlete } from "./athlete";
import { Coach } from "./coach";
import { Program } from "./program";

@Injectable({
  providedIn: "root"
})
export class CoachServiceService {


  constructor(private http: HttpClient) { }
  baseUrl = 'http://ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/coach';
  //baseUrl = 'http://localhost:8080/SwoleMate/coach';

  async getAthletes(id:number):Promise<Athlete[]>{
    return this.http.get<Athlete[]>(`${this.baseUrl}/${id}/athletes`)
    .toPromise();
  }

  async create(coach: Coach): Promise<number> {
    return this.http.post<number>(`${this.baseUrl}`, coach).toPromise();
  }

  async get(id: number): Promise<Coach> {
    return this.http.get<Coach>(`${this.baseUrl}/${id}`).toPromise();
  }

  update(coach: Coach) {
    return this.http.patch(`${this.baseUrl}/${coach.id}`, coach);
  }

  delete(id: number) {
    this.http.delete<Coach>(`${this.baseUrl}/${id}`);
  }

  createProgram(program: Program): void {
    this.http.post(`${this.baseUrl}/program`, program);
  }

  async getPrograms(coachId: number, athleteId: number): Promise<Program[]> {
    return this.http
      .get<Program[]>(`${this.baseUrl}/program/${coachId}/${athleteId}`)
      .toPromise();
  }

  updateProgram(program: Program): void {
    this.http.patch(`${this.baseUrl}/program/update`, program);
  }

  deleteProgram(id: number): void {
    this.http.delete(`${this.baseUrl}/program/${id}`);
  }


  addAthlete(coachId:number, athleteId:number):void{
    this.http.get(`${this.baseUrl}/${coachId}/${athleteId}`);
  }

  deleteAthlete(coachId:number, athleteId:number):void{
    this.http.delete(`${this.baseUrl}/${coachId}/${athleteId}`);

  }


}
