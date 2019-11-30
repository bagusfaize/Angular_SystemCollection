import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {

  loading = true;
  transactionhistory: [];

  constructor(
    private historyService: TransactionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllByCif();
  }
  getAllByCif() {
    const cif = this.route.snapshot.params['cif'];
    return this.historyService.getAllByCif(cif).subscribe((data) => {
      console.log(cif);
      console.log(data);
      this.transactionhistory = data['data'];
      this.loading = false;
    })
  }

}
