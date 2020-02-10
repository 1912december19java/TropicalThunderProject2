import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from '../login.service';
import { NavbarComponent } from '../navbar/navbar.component';



interface Data {
  isLoggedIn: Boolean;
  routerLink: String;
  message: String;
  id: number
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  loginInputEmailValue: String;
  loginInputPasswordValue: String;

  isChecked : Boolean = false;
  loginAsCoach : Boolean = false;


  data: Data = {
    isLoggedIn: false,
    routerLink: "",
    message: "",
    id: NaN
  };

  @Output() showLogout = new EventEmitter();
  constructor(

    private loginService : LoginService,
    private navbarComponent : NavbarComponent,
    private router: Router,
  ) { }


  loginHandler() : void {
    if (Boolean(this.data.isLoggedIn)) {
      this.loginService.setIsLoggedIn(this.data.isLoggedIn);
      console.log(this.data);
      localStorage.setItem("isLoggedIn", this.data.isLoggedIn.toString());
      localStorage.setItem("routerLink", this.data.routerLink.toString());
      localStorage.setItem("message", this.data.message.toString());
      localStorage.setItem("id", this.data.id.toString());

      this.router.navigateByUrl(`/${localStorage.getItem("routerLink")}`);
      this.showLogout.emit(true);
    }
  }

  loginAthlete() : void {
    try {
      this.loginService.authenticateAthlete(this.loginInputEmailValue, this.loginInputPasswordValue).subscribe(
        data => {
          this.data = data;
          this.loginHandler();
        }
      );
    } catch (err) {
      console.log("[login.component] ERROR : ", err);
    }
  }

  loginCoach() : void {
    try {
      this.loginService.authenticateCoach(this.loginInputEmailValue, this.loginInputPasswordValue).subscribe(
        data => {
          this.data = data;
          this.loginHandler();
        }
      );
    } catch (err) {
      console.log("[login.component] ERROR : ", err);
    }
  }

  getRouterLinkPath() : String {
    return localStorage.getItem('routerLink');
  }

  ngOnInit() {}
}
