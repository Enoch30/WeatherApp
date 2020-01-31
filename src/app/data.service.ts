import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getCities(){
   //return this._http.get<City[]>('https://jsonplaceholder.typicode.com/users')
    return this._http.get<City[]>('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2642465,2640729,2644668,3333158,2643743,2172797,2332453,4931972,2643339,1816670,2655603&units=metric&APPID=194333f5b09188fbda8c4a3bbfea30b2');
  }
}
