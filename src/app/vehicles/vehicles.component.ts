import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public  vehicles: any;
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  public getVehicles() {
    return this.service.getVehicles().subscribe((data: any) => {
      this.vehicles = data;
    });
  }

}
