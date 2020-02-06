import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WorkoutService {
  frequency: number;
  constructor() {}

  setFrequency(frequency: number): void {
    this.frequency = frequency;
  }

  getFrequency(): Observable<number> {
    return of(this.frequency);
  }
}
