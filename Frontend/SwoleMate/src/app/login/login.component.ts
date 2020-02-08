import { Component, OnInit } from "@angular/core";
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public userService : UserService) {}

  isCoach:boolean = false;

  user:User = new  User('','');

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    this.userService.attemptLogIn(this.user.email, this.user.password, this.isCoach);
    this.user = new User('','');
    }
}
