import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Athlete } from "./athlete";
import { Observable } from "rxjs";
import { Program } from "./program";
import { Coach } from "./coach";
import { Exercise } from "./exercise";

@Injectable({
  providedIn: "root"
})
export class AthleteService {

  private baseUrl: string = "//ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/athlete";
  private coachUrl: string = "//ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/coach";

  constructor(private http: HttpClient) { }
  id: number = 1;
  coachId: number = 1;
  athlete: Athlete;
  public coachNum: number;
  public athleteNum: number;

   getAthlete(): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseUrl + "/" + this.id);
   
  }

  deleteCoach(id1:number, id2: number):Observable<any>  {
    return this.http.delete(`${this.coachUrl}/${id1}/${id2}`, {responseType: 'text'});
  }
}
