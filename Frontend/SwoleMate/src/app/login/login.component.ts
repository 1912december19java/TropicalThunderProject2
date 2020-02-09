import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoginService } from '../login.service';
import { NavbarComponent } from '../navbar/navbar.component';

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

  setData({ isLoggedIn, routerLink, message }) : void {
    this.data['isLoggedIn'] = isLoggedIn;
    this.data['routerLink'] = routerLink;
    this.data['message'] = message;
  }

  loginAthlete() {
    try {

      this.loginService.authenticateAthlete().subscribe(data => this.data = data);
      this.loginService.setIsLoggedIn(this.data.isLoggedIn);

      localStorage.setItem("isLoggedIn", this.data.isLoggedIn.toString());
      localStorage.setItem("routerLink", this.data.routerLink.toString());
      localStorage.setItem("message", this.data.message.toString());

      this.showLogout.emit(true);

    } catch (Exception) {
      console.log("[login.component] err : ", Exception.error.error.stack);
      console.log("[login.component] err : ", Exception.error.error.message);
    }
  }

  loginCoach() {

  }

  ngOnInit() {}
}
