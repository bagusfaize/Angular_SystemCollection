import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../components/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://192.168.1.23:3002/customer/';

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  getByCif(cif: String ): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + cif);
  }

  getSearch(keyword: String): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + 'search?q=' + keyword );
  }
}
