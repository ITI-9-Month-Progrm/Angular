import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StudentTableComponent,
    AllInOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
