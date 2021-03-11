import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

const routs:Routes = [
  {path:"",redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentHomeComponent},
  {path:"getStudent/:id",component:StudentDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    StudentDetailsComponent,
    AboutComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
