import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-coach-dashboard",
  templateUrl: "./coach-dashboard.component.html",
  styleUrls: ["./coach-dashboard.component.css"]
})
export class CoachDashboardComponent implements OnInit {
  public isCollapsed = false;

  constructor() {}

  ngOnInit() {}
}
