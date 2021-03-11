import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styles: [
  ]
})
export class NewEmployeeComponent implements OnInit, OnDestroy {
  id = 6;
  sub;
  constructor(private myservice:EmployeeService) { }

  ngOnInit(): void {
  }

  addNewEmp(name, age, email, city, street){
    let emp = {id:this.id,name:name,age:age,email:email,address:{city:city,street:street}}
    this.sub = this.myservice.addNewUser(emp)
      .subscribe(data => {console.log(data)})
      this.id+=1;
      alert("New Emplyee was Add" );
    }

    ngOnDestroy(): void{

      //this.sub.unSubscribe();
    }
}
