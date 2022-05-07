import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  baseURL: string = 'https://restcountries.com/v2/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + 'all');
  }


  public getByName(name: string): Observable<any> {
    return this.httpClient.get(this.baseURL + 'name/'+ name);
  }
}
