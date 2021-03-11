import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {
   id;
  constructor(myActived:ActivatedRoute) {
    this.id=myActived.snapshot.params["id"];
   }

  ngOnInit(): void {
  }

}
