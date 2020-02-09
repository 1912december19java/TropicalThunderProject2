export class Exercise {
  programId?: number;
  sets: number;
  reps: number;
  load: string;
  name: string;
  day: number;
  coachNotes: string;
  athleteNotes?: string;
  exerciseUrl?: string;
  isComplete?: boolean;


  constructor(
    name: string,
    sets: number,
    reps: number,
    load: string,
    cn: string,
    day: number
  ) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.load = load;
    this.coachNotes = cn;
    this.day = day;
  }
}
