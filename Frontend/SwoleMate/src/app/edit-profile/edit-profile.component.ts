import { Component, OnInit } from "@angular/core";
import {User} from "../user";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {

  model = new User('Jordan','mail@email.com','wasspord','Athlete');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model) + this.submitted}
  constructor() {}

  ngOnInit() {}
}
