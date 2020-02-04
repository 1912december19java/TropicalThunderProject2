import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  frequency:number = 0;

  getFrequency(): Observable<number>{
    return of(this.frequency);
  }

  setFrequency(newFreq:number){
    this.frequency = newFreq;
  }
}
