import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employee;
  @Input() empID;
  idFromUrl;
  imgSrc;
  sub;
  src="assets/images/";
  constructor(private router : Router, private myactive : ActivatedRoute,private myservice:EmployeeService) {
    //console.log(this.empID);
    this.idFromUrl=this.myactive.snapshot.params.id;
    this.sub = myservice.getEmployee(this.idFromUrl).subscribe(
      (response)=>{this.employee = response;this.imgSrc = this.src+this.idFromUrl+'.jpg'},
      (error)=>{console.log(error);}
    )
   }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigateByUrl("employees");
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
