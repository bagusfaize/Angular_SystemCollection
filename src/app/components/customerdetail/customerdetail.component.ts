import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { LoanService } from 'src/app/services/loan.service';
import { CaService } from 'src/app/services/ca.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Payment } from 'src/app/components/models/payment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  payment: Payment


  // customerForm = this.builder.group({
  //   cif: ['', Validators.required],
  //   names: ['', Validators.required],
  // });

  // loanForm = this.builder.group({
  //   amount: ['', Validators.required]
  // });

  caForm = this.builder.group({
    cif: ['', Validators.required],
    loan_number: ['', Validators.required],
    balance: ['', Validators.required],
    createdAt: ['', Validators.required]
  });

  inputForm = this.builder.group({
    payment_id:  ['', Validators.required],
    container_id: ['', Validators.required],
    cif: ['', Validators.required],
    pay_today: ['', Validators.required],
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private loanService: LoanService,
    private caService: CaService,
    private trxService: TransactionService,
    private builder: FormBuilder,
    private http: HttpClient
    ) {
      this.payment = new Payment();
     }

  ngOnInit() {
    // this.getByCif();
    // this.getLoanByCif();
    // this.getCaByCif();
    this.getCaById();
  }

  // getByCif() {
  //   const cif = this.route.snapshot.params['cif'];
  //   this.customerService.getByCif(cif).subscribe(data => {
  //     this.customerForm.controls['cif'].setValue(data["data"].cif);
  //     this.customerForm.controls['names'].setValue(data["data"].first_name + " " + data["data"].last_name);
  //     this.inputForm.controls['cif'].setValue(data["data"].cif);
  //     // console.log('DATA FROM CUSTOMER');
  //     // console.log(data);
  //     // this.customerForm.setValue(data["data"]);
  //   }, error => console.log(error));
  // }

  // getLoanByCif() {
  //   const cif = this.route.snapshot.params['cif'];
  //   this.loanService.getbyCif(cif).subscribe(data => {
  //     this.loanForm.controls['amount'].setValue(
  //       data["data"].amount
  //     );
  //     // console.log('RESPONSE FROM LOAN');
  //     // console.log(data.data);
  //   }, error => console.log(error));
  // }

  // getCaByCif() {
  //   const cif = this.route.snapshot.params['cif'];
  //   this.caService.getByCif(cif).subscribe(data => {
  //     this.caForm.controls['daily_billing'].setValue(data["data"].daily_billing);
  //     this.caForm.controls['balance'].setValue(data["data"].balance);
  //     this.inputForm.controls['container_id'].setValue(data["data"].id)
  //     // console.log('RESPONSE FROM CA');
  //     // console.log(data.data);
  //   }, error => console.log(error));
  // }

  getCaById() {
    const id = this.route.snapshot.params['id'];
    this.caService.getById(id).subscribe(data => {
      console.log(data);
      this.caForm.controls['cif'].setValue(data["data"].cif);
      this.inputForm.controls['cif'].setValue(data["data"].cif);
      this.caForm.controls['loan_number'].setValue(data["data"].loan_number);
      this.caForm.controls['balance'].setValue(data["data"].balance);
      this.caForm.controls['createdAt'].setValue(data["data"].createdAt);
      this.inputForm.controls['container_id'].setValue(data["data"].id);
      this.router.navigate(["/customerdetail/"+id]);
    })
  }

  onSubmit(payment: Payment) {
    // console.log(payment.pay_today);
    this.trxService.postInput(payment).subscribe(data => {
      console.log(data)
      this.payment = data;
    })
  }

  // onSubmit(body) {
  //   console.log(body);
  //   this.trxService.postInput(body).subscribe(data => {

  //   });
  // }

  // onSubmitzz = function (body) {

  //   this.trxService.

  //   this.http.post("http://192.168.1.18.3001/payment/", body).subscribe((data) => {});

  // }

}
