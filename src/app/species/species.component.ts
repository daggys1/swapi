import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  public species: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getSpecies();
  }

  public getSpecies() {
    return this.service.getSpecies().subscribe((data: any) => {
      this.species = data;
    });
  }
}
