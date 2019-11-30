import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  loading = true;

  customers: [];
  // showErrorImage: false;
  message: String;
  customerUpdate: Customer = new Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.customerService.getAll().subscribe((data) => {
      this.customers = data['data'];
      this.loading = false;
    });
  }

  Payment(cif: String) {
    this.customerService.getByCif(cif).subscribe( data => {
      this.customerUpdate = data['data'];
    })
    this.router.navigate(['customerdetail', cif]);
  }
  History(cif: String) {
    this.customerService.getByCif(cif).subscribe( data => {
      this.customerUpdate = data['data'];
    })
    this.router.navigate(['history', cif]);
  }

  getSearch(keyword: String) {
    this.customerService.getSearch(keyword)
    .subscribe( data => {
      this.customers = data['data'];
      if (this.customers == null) {
        this.customers = [];
        this.message = keyword + ' not found';
      } else{
        this.message = null;
      }
    });
  }

}
