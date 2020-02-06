import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { athlete } from "../athlete";
import { AthleteService } from "../athlete.service"
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-athlete-dashboard',
  templateUrl: './athlete-dashboard.component.html',
  styleUrls: ['./athlete-dashboard.component.css']
})
export class AthleteDashboardComponent implements OnInit {

  athlete: Observable<athlete[]>;

  isCollapsed: Boolean = false;
  
  

  constructor(private athleteService: AthleteService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.athlete = this.athleteService.getAthletesList();
  }

  denyAthlete(id: number) {
    this.athleteService.dentAthlete(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    
  }

  

}
