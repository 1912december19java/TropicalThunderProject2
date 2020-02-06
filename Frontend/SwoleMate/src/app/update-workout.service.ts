import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class UpdateWorkoutService {

  baseUrl: string = ''

  constructor(private http: HttpClient) { }

  async getAll() : Promise<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.baseUrl}/exercise`)
        .toPromise();
  }

  async updateExercise(exercise: Exercise) : Promise<Exercise> {
    return this.http.put<Exercise>(`${this.baseUrl}/exercise/${exercise.ExerciseId}`, exercise)
        .toPromise();
}
