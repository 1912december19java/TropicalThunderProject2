
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoginService } from '../login.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { User } from '../user';
import { UserService } from '../user.service';

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

  @Output() showLogout = new EventEmitter();

  constructor(
    private loginService : LoginService,
    private navbarComponent : NavbarComponent,
  ) { }

  chkInputCoachClicked() {
    this.isChecked = !this.loginAsCoach;
  }

  async loginAthlete(): Promise<any> {
    let data = await this.loginService.authenticateAthlete();
    this.loginService.setIsLoggedIn(data.isLoggedIn);

    localStorage.setItem("isLoggedIn", data.isLoggedIn.toString());
    localStorage.setItem("routerLink", data.routerLink.toString());
    localStorage.setItem("message", data.message.toString());

    this.showLogout.emit(true);
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

  onSubmit() {
    console.log(this.user);
    this.userService.attemptLogIn(this.user.email, this.user.password, this.isCoach);
    this.user = new User('','');
    }
}
