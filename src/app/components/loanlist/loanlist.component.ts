import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loanlist',
  templateUrl: './loanlist.component.html',
  styleUrls: ['./loanlist.component.css']
})
export class LoanlistComponent implements OnInit {

  message: String;
  loading = true;
  loan: [];

  constructor(
    private loanService: LoanService,
    private router: Router
  ) { }

  ngOnInit() {
  this.getAll();
  }

  getAll() {
    return this.loanService.getAll().subscribe((data) => {
      this.loan = data['data'];
      this.loading = false;
    });
  }

  getSearch(keyword: String) {
    this.loanService.getSearch(keyword)
    .subscribe( data => {
      this.loan = data['data'];
      if (this.loan == null) {
        this.loan = [];
        this.message = keyword + ' not found';
      } else{
        this.message = null;
      }
    });
  }

}
