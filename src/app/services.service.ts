import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private  httpClient:  HttpClient) { }

  getPeople(){
    return  this.httpClient.get('https://swapi.co/api/people');
  }
}
