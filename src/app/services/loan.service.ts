import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor( private httpClient: HttpClient) { }

  url = 'http://192.168.43.180:3000/loan/';

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  getbyCif(cif: String): Observable<any> {
    return this.httpClient.get<any>(this.url + cif);
  }

  getSearch(keyword: String ): Observable<any> {
    return this.httpClient.get<any>(this.url + 'search?q=' + keyword );
  }

}
