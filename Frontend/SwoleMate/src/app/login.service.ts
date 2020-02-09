import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  isLoggedIn: Boolean;
  routerLink: String;
  message: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'http://ec2-35-175-147-247.compute-1.amazonaws.com:8085/SwoleMate/login';
  // baseUrl: String = 'http://localhost:8080/SwoleMate/login';

  data : Data = {
    isLoggedIn: false,
    routerLink: "",
    message: ""
  };

  constructor(private http: HttpClient) { }

  authenticateAthlete(): Observable<Data> {
    return this.http.get<Data>(`${this.baseUrl}?user=Athlete&email=yuu@me.com&password=password`);
  }

  authenticateCoach(): Observable<Data> {
    return this.http.get<Data>(`${this.baseUrl}?user=Coach&email=brevature@revature.net&password=password`);
  }

  // authenticateAthlete(): Promise<Data> {
  //   return this.http.get<Data>(`${this.baseUrl}?user=Athlete&email=yuu@me.com&password=password`).toPromise();
  // }
  //
  // authenticateCoach(): Promise<Data> {
  //   return this.http.get<Data>(`${this.baseUrl}?user=Coach&email=brevature@revature.net&password=password`).toPromise();
  // }

  // setters
  setIsLoggedIn(isLoggedIn : Boolean) : void {
    this.data.isLoggedIn = isLoggedIn;
  }

  setRouterLink(routerLink: String) : void {
    this.data.routerLink = routerLink;
  }

  setMessage(message : String) : void {
    this.data.message = message;
  }

  // getters
  getIsLoggedIn() : Boolean {
    return this.data.isLoggedIn;
  }

  getRouterLink() : String {
    return this.data.routerLink;
  }

  getMessage() : String {
    return this.data.message;
  }

}
