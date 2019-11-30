import { Component, OnInit } from '@angular/core';
import { CaService } from 'src/app/services/ca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  loading = true;

  account: [];

  message: String;

  constructor(
    private caService: CaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.caService.getAll().subscribe((data) => {
      this.account = data['data'];
      console.log("CONTAIN");
      console.log(data);
      this.loading = false;
    });
  }

  Payment(id: String) {
    this.caService.getById(id).subscribe( data => {
      this.caService = data['data'];
    });
    this.router.navigate(['customerdetail', id]);
  }

}
