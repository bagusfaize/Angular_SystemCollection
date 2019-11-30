import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoanlistComponent } from './components/loanlist/loanlist.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { TransactionhistoryComponent } from './components/transactionhistory/transactionhistory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputcontainerComponent } from './components/inputcontainer/inputcontainer.component';
import { AccountlistComponent } from './components/accountlist/accountlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoanlistComponent,
    CustomerlistComponent,
    CustomerdetailComponent,
    UploadfileComponent,
    TransactionhistoryComponent,
    InputcontainerComponent,
    AccountlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
