import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private  httpClient:  HttpClient) { }

  getPeople(){
    //todo get this url from config
    console.log('USING people configuration from environment');
    console.log(environment.SWAPI_PEOPLE);
    return  this.httpClient.get(environment.SWAPI_PEOPLE);
  }
}
