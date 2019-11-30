import { Component, OnInit } from '@angular/core';
import { ContainerAccount } from 'src/app/components/models/ca';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-inputcontainer',
  templateUrl: './inputcontainer.component.html',
  styleUrls: ['./inputcontainer.component.css']
})
export class InputcontainerComponent implements OnInit {

  containerAccount: ContainerAccount;

  constructor(
    private trxService: TransactionService
  ) { 
    this.containerAccount = new ContainerAccount();
  }

  ngOnInit() {
  }

  onSubmit(containerAccount: ContainerAccount) {
    this.trxService.postCa(containerAccount).subscribe(data => {
      console.log(data);
      this.containerAccount = data;
    })
  }

}
