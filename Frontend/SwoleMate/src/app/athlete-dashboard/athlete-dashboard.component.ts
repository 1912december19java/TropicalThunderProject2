import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athlete-dashboard',
  templateUrl: './athlete-dashboard.component.html',
  styleUrls: ['./athlete-dashboard.component.css']
})
export class AthleteDashboardComponent implements OnInit {

  isCollapsed: Boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

}
