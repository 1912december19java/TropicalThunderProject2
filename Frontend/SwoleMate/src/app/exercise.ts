import { Program } from './program';

export class Exercise {
  program?: Program = new Program();
  exerciseSets?: number;
  exerciseReps?: number;
  exerciseLoad?: string;
  exerciseName?: string;
  exerciseDay?: number;
  coachNotes?: string;
  athleteNotes?: string;
  exerciseUrl?: string;
  isComplete?: boolean;
  exerciseId?: any;
}