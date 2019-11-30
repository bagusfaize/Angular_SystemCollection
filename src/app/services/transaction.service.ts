import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../components/models/payment';
import { ContainerAccount } from '../components/models/ca';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
    ) { }

  url = 'http://192.168.43.180:3011/dailyBilling/';

  urlPayment = 'http://192.168.43.180:3001/payment/';

  urlCa = 'http://192.168.43.180:3004/ca';

  getByCif(cif: String): Observable<any> {
    return this.http.get<any>(this.url + cif);
  }

  getAllByCif(cif: String): Observable<any> {
    return this.http.get<any>(this.urlPayment + 'search?q=' + cif);
  }

  postInput(payment: Payment):Observable<Payment> {
    return this.http.post<Payment>(this.urlPayment, payment);
  }

  postCa(containerAccount: ContainerAccount):Observable<ContainerAccount> {
    return this.http.post<ContainerAccount>(this.urlCa, containerAccount);
  }

}
