import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginValidation() {
    var user = document.login.usr.value;
    var password = document.login.pword.value;

    if ((user == 'admin') && (password == 'admin')) {
      this.router.navigate(["/homepage"]);
      return false;
  }
  else {
      alert ("Login failed, please check your username and password");
  }
  // this.router.navigate(["/homepage"]);
}
}