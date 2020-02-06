import { Component, OnInit } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-athlete-dashboard",
  templateUrl: "./athlete-dashboard.component.html",
  styleUrls: ["./athlete-dashboard.component.css"]
})
export class AthleteDashboardComponent implements OnInit {
  public isCollapsed = false;

  constructor() {}

  ngOnInit() {}
}
