
import { Coach } from './coach';
import { Program } from './program';

export class Athlete {

        athleteId?: number;
        coach?: Coach = new Coach();
        name?: string;
        email?: string;
        password?: string;

}

