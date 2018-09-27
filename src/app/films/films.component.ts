import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {


  public films: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getFilms();
  }


  public getFilms() {
    return this.service.getFilms().subscribe((data: any) => {
      this.films = data;
    });
  }
}
