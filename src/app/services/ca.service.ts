import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://192.168.1.23:3004/ca/cif/';
  apiUrl = 'http://192.168.1.23:3004/ca/';

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  getById(id: String): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + id);
  }

  getByCif(cif: String): Observable<any> {
    return this.httpClient.get<any>(this.url + cif);
  }
  
}
