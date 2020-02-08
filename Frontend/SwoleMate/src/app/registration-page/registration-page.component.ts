import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserService } from '../user.service';

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.css"]
})
export class RegistrationPageComponent implements OnInit {
  constructor(public userService:UserService) {}


  user = new User('','',);


  ngOnInit() {}

  onSubmit() {
    this.userService.register(this.user);
  }
}
