import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {debounceTime, map} from 'rxjs/operators'
import { User } from '../user';
import { AthleteService } from '../athlete.service';
import { Athlete } from '../athlete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public model: any;

  athlete : any
  names : string[];

  searchResults : string[] = [
    "joe",
    "dex",
    "hass"
  ]


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.searchResults.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x;

  constructor(private athleteService : AthleteService) { }

  ngOnInit() {
    // this.athlete =  this.athleteService.getAthlete().subscribe(data => this.athlete = data);
  }

  typingStart() {
    console.log(this.athlete.name)
  this.searchResults.push(this.athlete.name)
  }
}
