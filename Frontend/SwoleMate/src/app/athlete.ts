import { Coach } from './coach';

export interface Athlete {
   
        athleteId?:number;
        coach?: Coach;
        name?:string;
        email?:string;
        password?:string;
}
