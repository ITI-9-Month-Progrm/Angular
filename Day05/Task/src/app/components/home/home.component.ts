import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EmptyError } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  employeeList;
  sub;

  constructor(private myService:EmployeeService) {
   this.sub = this.myService.getAllEmployee().subscribe(
      (response)=>{this.employeeList=response;
      console.log(this.employeeList);},
      (error)=>{console.log(error);}
    )

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

    this.sub.unsubscribe();
  }

}
