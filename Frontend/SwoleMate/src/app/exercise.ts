export class Exercise {
<<<<<<< HEAD
    programId?:number;
    sets:number;
    reps:number;
    load:string;
    name:string;
    day:number;
    coachNotes:string;
    athleteNotes?:string;
    exerciseUrl?:string;
    isComplete?:boolean;

    constructor(name:string, sets:number, reps:number, load:string, day:number){
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.load = load;
        this.day = day;
     }
=======
  programId?: number;
  sets?: number;
  reps?: number;
  load?: number;
  name?: string;
  day?: number;
  coachNotes?: string;
  athleteNotes?: string;
  exerciseUrl?: string;
  isComplete?: boolean;

  constructor() {}
>>>>>>> Development
}
