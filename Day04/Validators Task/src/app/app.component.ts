import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day03Project';
  DataAppComponent:string = "Ana Data From AppComponent";
  studentList:[{studentName:string, studentAge:number}]=[{studentName:"", studentAge:0}];

  recieveNewStudent(newStudent){
    console.log(newStudent)
    this.studentList.push(newStudent);
  }
}
