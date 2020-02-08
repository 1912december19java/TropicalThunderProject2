import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-edit-coach-profile',
  templateUrl: './edit-coach-profile.component.html',
  styleUrls: ['./edit-coach-profile.component.css']
})
export class EditCoachProfileComponent implements OnInit {

  model = new User('Jordan','mail@email.com','wasspord','Coach');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model) + this.submitted}

  constructor() { }

  ngOnInit() {
  }

}
