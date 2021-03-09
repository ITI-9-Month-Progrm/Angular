import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName:string="";
  age:number;
  //students list tkon fi app
  students:[{studentName:string, studentAge:number}]=[{studentName:"", studentAge:0}]
  //function di tb3at student object
  addStudent(){
    let newStudent ={studentName:this.userName,studentAge:this.age}
    console.log(newStudent)
    if(newStudent.studentName!="" && newStudent.studentAge>=18)
       {
        this.students.push(newStudent);
       }else{
        alert("Name is not Valid")
       }
    // this.userName="";
    // this.age=0;
  }
}
