import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.scss']
})
export class StarShipsComponent implements OnInit {


  public starShips: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getStarShips();
  }


  public getStarShips() {
    return this.service.getStarShips().subscribe((data: any) => {
      this.starShips = data;
    });
  }
}
