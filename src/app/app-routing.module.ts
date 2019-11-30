import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoanlistComponent } from './components/loanlist/loanlist.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { TransactionhistoryComponent } from './components/transactionhistory/transactionhistory.component';
import { InputcontainerComponent } from './components/inputcontainer/inputcontainer.component';
import { AccountlistComponent } from './components/accountlist/accountlist.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'homepage', component: HomeComponent},
  { path: 'loanlist', component: LoanlistComponent},
  { path: 'customerlist', component: CustomerlistComponent},
  { path: 'customerdetail/:id', component: CustomerdetailComponent},
  { path: 'uploadfile', component: UploadfileComponent},
  { path: 'history/:cif', component: TransactionhistoryComponent},
  { path: 'formca', component: InputcontainerComponent },
  { path: 'accountlist', component: AccountlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
