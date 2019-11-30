import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionhistoryService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://192.168.43.180:3011/dailyBilling/';

  getAllByCif(cif: String): Observable<any> {
    return this.http.get<any>(this.url +'search?q=' + cif);
  }

}