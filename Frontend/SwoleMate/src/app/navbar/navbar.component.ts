import { Component, OnInit, Injectable, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
@Injectable({
  providedIn: 'root',
})
export class NavbarComponent implements OnInit {

  constructor() {}

  @Input() public userIsLoggedIn() : Boolean {
    return Boolean(localStorage.getItem('isLoggedIn')) ? true : false;
  }

  onClick(evt) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('routerLink');
    localStorage.removeItem('message');
  }

  ngOnInit() {}
}
