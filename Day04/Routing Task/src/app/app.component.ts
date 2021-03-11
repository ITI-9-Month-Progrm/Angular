import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day04Project';
  constructor(private router:Router){}
  goToHome(){
    // this.router.navigate(['/profile']);
    this.router.navigateByUrl("students");
  }
}
