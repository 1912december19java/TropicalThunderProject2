import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isLoggedIn : boolean = true;

  constructor() {}

  onChangeLoginStatus(status) {
    console.log("[navbar.component] status : ", status);
    this.isLoggedIn = status;
  }

  onClick(evt) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('routerLink');
    localStorage.removeItem('message');

    this.isLoggedIn = this.logoutButtonHandler(localStorage.getItem('isLoggedIn'));
  }

  logoutButtonHandler(isLoggedIn) {
    if (isLoggedIn === 'true') {
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
