import { Exercise } from "./exercise";
import { Coach } from './coach';
import { Athlete } from './athlete';

export class Program {
  programId?: number;
  coach?: Coach = new Coach();
  athlete?: Athlete = new Coach();
  programExercises?: Array<Exercise> = [];
  programDuration?: number;
  programFrequency?: number;
  isComplete?: boolean;
  isActive?: boolean;

  constructor() {}
}
