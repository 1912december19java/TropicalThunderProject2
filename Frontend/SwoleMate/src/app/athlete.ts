import { Coach } from "./coach";

export class Athlete {

        athleteId?: number;
        coach?: Coach;
        name?: string;
        email?: string;
        password?: string;
     

        constructor(Id, coachInfo, name, email, password) {
                this.athleteId = Id;
                this.coach = coachInfo;
                this.name = name;
                this.email = email;
                this.password = password;
              }
        }
