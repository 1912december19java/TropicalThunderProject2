import { Coach } from './coach';

export class Athlete {
   
        athleteId?:number;
        coach?: Coach = new Coach();
        name?:string;
        email?:string;
        password?:string;
}
