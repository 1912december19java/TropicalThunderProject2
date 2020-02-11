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

  async update(coach: Coach): Promise<Response> {
    return this.http.patch<Response>(`${this.baseUrl}/${coach.id}`, coach).toPromise();
  }

  async delete(id: number): Promise<Coach> {
    return this.http.delete<Coach>(`${this.baseUrl}/${id}`).toPromise();
  }


  async createProgram(program: Program): Promise<Response> {
    return this.http.post<Response>(`${this.baseUrl}/program`, program).toPromise();
  }

  async getPrograms(coachId: number, athleteId: number): Promise<Program[]> {
    return this.http
      .get<Program[]>(`${this.baseUrl}/${coachId}/program/${athleteId}`)
      .toPromise();
  }

  async updateProgram(program: Program): Promise<Response> {
    return this.http.patch<Response>(`${this.baseUrl}/program/update`, program).toPromise();
  }

  async deleteProgram(id: number): Promise<Response> {
    return this.http.delete<Response>(`${this.baseUrl}/program/${id}`).toPromise();
  }


  async addAthlete(coachId:number, athleteId:number):Promise<Response>{
    return this.http.get<Response>(`${this.baseUrl}/${coachId}/${athleteId}`).toPromise();
  }

  async deleteAthlete(coachId:number, athleteId:number):Promise<Response>{
    return this.http.delete<Response>(`${this.baseUrl}/${coachId}/${athleteId}`).toPromise();
  }
}
