import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {


  public planets: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getPlanets();
  }


  public getPlanets() {
    this.service.getPlanets().subscribe((data: any) => {
      this.planets = data;
      console.log(data);
    });
  }
}
