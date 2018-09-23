import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private service :ServicesService ) { }
  public  people: any;
  ngOnInit() {
    this.getPeople();
  }
  public getPeople(){
    this.service.getPeople().subscribe((data:  any) => {
      this.people = data;
        console.log(data);
    });
}
}
