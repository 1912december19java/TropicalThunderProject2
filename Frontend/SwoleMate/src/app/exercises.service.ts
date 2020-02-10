import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Exercise } from "./exercise"
import { Observable } from 'rxjs';
import { Exercises } from './exercises';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private exerciseUrl: string = "//ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/exercises"

  constructor(private http: HttpClient) { }
  programId: number = 13

  getExercises(): Observable<Exercises[]> {
    
    return this.http.get<Exercises[]>(this.exerciseUrl);
  }

  updateExercise(id:number, value: any): Observable<void>{
    return this.http.put<void>(`${this.exerciseUrl}/${id}`, value);
    
  }

}
