import { Exercise } from './exercise';

export class Program {
    programId?:number;
    coachId?:number;
    athleteId?:number;
    programExercises?: Array<Exercise>;
    programDuration?:number;
    programFrequency?:number;
    isComplete?:boolean;
    isActive?:boolean;

    constructor(){}
}
