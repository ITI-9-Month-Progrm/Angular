import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName:string="";
  age:number;
  @Output() studentEvent = new EventEmitter();
  sendStudentData(){
    let newStudent = {studentName:this.userName, studentAge:this.age};
   
    if(newStudent.studentName!="" && newStudent.studentAge>=18)
       {
        this.studentEvent.emit(newStudent);
       }else{
        alert("Name is not Valid")
       }
  }
}
