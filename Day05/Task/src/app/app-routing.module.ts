import { error } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';

const routes: Routes = [
  {path:"",redirectTo:"employees",pathMatch:"full"},
  {path:"employees",component:HomeComponent},
  {path:"employees/:id",component:EmployeesComponent},
  {path:"addEmployee",component:NewEmployeeComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
