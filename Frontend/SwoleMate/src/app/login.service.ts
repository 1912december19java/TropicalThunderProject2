import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  isLoggedIn: Boolean;
  routerLink: String;
  message: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //baseUrl: string = 'http://ec2-35-175-147-247.compute-1.amazonaws.com:8085/coach';
  baseUrl: String = 'http://localhost:8080/SwoleMate/login';

  constructor(private http: HttpClient) { }

  authenticateAthlete(): Promise<Data> {
    return this.http.get<Data>(`${this.baseUrl}?user=Athlete&email=yuu@me.com&password=password`).toPromise();
  }

  authenticateCoach(): Promise<Data> {
    return this.http.get<Data>(`${this.baseUrl}?user=Coach&email=brevature@revature.net&password=password`).toPromise();
  }

}
