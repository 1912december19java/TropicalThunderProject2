
import { Coach } from './coach';
import { Program } from './program';

export class Athlete {

        athleteId?: number;
        coach?: Coach = new Coach();
        name?: string;
        email?: string;
        password?: string;

      
     

        constructor(Id, coachInfo, name, email, password, program) {
                this.athleteId = Id;
                this.coach = coachInfo;
                this.name = name;
                this.email = email;
                this.password = password;
        }}

