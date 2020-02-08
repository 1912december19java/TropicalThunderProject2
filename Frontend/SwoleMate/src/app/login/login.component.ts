import { Component, OnInit } from "@angular/core";
import { LoginService } from '../login.service';

interface Data {
  isLoggedIn: Boolean;
  routerLink: String;
  message: String;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isChecked : Boolean = false;
  loginAsCoach : Boolean = false;

  data: Data = {
    isLoggedIn: false,
    routerLink: "",
    message: ""
  };

  constructor(private loginService : LoginService) { }

  chkInputCoachClicked() {
    this.isChecked = !this.loginAsCoach;
  }

  async loginAthlete(): Promise<any> {
    let data = await this.loginService.authenticateAthlete();
    console.log("[login.component] loginAthlete() isChecked : ", this.isChecked);
    console.log("[login.component] loginAthlete() data.routerLink : ", data.routerLink);
    console.log("[login.component] loginAthlete() data.isLoggedIn : ", data.isLoggedIn);
    localStorage.setItem("isLoggedIn", data.isLoggedIn.toString());
    localStorage.setItem("routerLink", data.routerLink.toString());
    localStorage.setItem("message", data.message.toString());
  }

  async loginCoach() {
    const data = await this.loginService.authenticateCoach();
    console.log("[login.component] loginAthlete() isChecked : ", this.isChecked);
    console.log("[login.component] loginCoach() data.routerLink : ", data.routerLink);
    console.log("[login.component] loginCoach() data.isLoggedIn : ", data.isLoggedIn);
    localStorage.setItem("isLoggedIn", data.isLoggedIn.toString());
    localStorage.setItem("routerLink", data.routerLink.toString());
    localStorage.setItem("message", data.message.toString());
  }

  ngOnInit() {}
}
