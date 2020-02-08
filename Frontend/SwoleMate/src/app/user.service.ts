import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Coach } from './coach';
import { Athlete } from "./athlete";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  baseUrl = 'http://ec2-35-175-147-247.compute-1.amazonaws.com:8085';
  //baseUrl = 'http://localhost:4200/SwoleMate';

  public isLoggedIn: boolean = true;
  public loggedInUser: User = new User('', '');

  register(user: User) {
    if (user.type === "Coach") {
      let newUser = new Coach();
      let baseUrl = this.baseUrl + "/coach";
      newUser.name = user.name;
      newUser.email = user.email;
      newUser.password = user.password;


      this.http.post(`${baseUrl}`, newUser)
        .subscribe((response: number) => {
          console.log(`registered as user ${response}`);
        });
    } else {
      let newUser = new Athlete();
      let baseUrl = this.baseUrl + "/athlete";
      newUser.name = user.name;
      newUser.email = user.email;
      newUser.password = user.password;

      this.http.post(`${baseUrl}`, newUser)
        .subscribe((response: number) => {
          console.log(`registered as user ${response}`);
        });
    }
  }

  attemptLogIn(username: string, password: string, isCoach: boolean) {
    const loggingInAsUser = new User(username, password);
    if (isCoach)
      loggingInAsUser.type = "Coach";
    else
      loggingInAsUser.type = "Athlete";

    this.http.get(`${this.baseUrl}?user=${loggingInAsUser.type}&email=${loggingInAsUser}&password=${loggingInAsUser.password}`)
      .subscribe((response: boolean) => {
        if (response) {
          this.isLoggedIn = true;
          this.loggedInUser = loggingInAsUser;
        } else {
          this.isLoggedIn = false;
          this.loggedInUser = new User('', '');
        }
      });
  }

  logOut() {
    this.isLoggedIn = false;
    this.loggedInUser = new User('', '');
  }
}
