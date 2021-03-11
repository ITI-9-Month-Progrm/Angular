import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() studentEvent = new EventEmitter();
  sendStudentData(name,age){
    let newStudent = {studentName:name, studentAge:age};

    if(newStudent.studentName!="" )
       {
        this.studentEvent.emit(newStudent);
       }else{
        alert("Name is not Valid")
       }
  }

  formValidation = new FormGroup({
    name:new FormControl("Asmaa",Validators.required),
    age: new FormControl(20,[Validators.required,Validators.min(18),Validators.max(80)])
  });

  get ageStatus(){
    return this.formValidation.controls.age.valid;
  }
  get nameStatus(){
    return this.formValidation.controls.name.valid;
  }
  get allValid(){
    if(this.ageStatus && this.nameStatus){
      return true;
    }else {
      return false;
    }
  }

}
