import { Component } from '@angular/core';

@Component({
  selector: 'manual-component',
  templateUrl: './manualComponent.component.html',
  styleUrls: ['./manualComponent.component.css']
})
export class ManualComponent {
       userName ="";
      
       path="assets/images/";
       imgNum=1;
       src = this.path + this.imgNum + ".jpg";
       changeName(e:any){
         this.userName = e.target.value;
       }
       defaultValue(){
         this.userName="Asmaa";
       }
       goNext(){
         if(this.imgNum<6){
           this.imgNum++;
           this.src = this.path + this.imgNum + ".jpg";
         }
       }
       goPrev(){
        if(this.imgNum>1){
          this.imgNum--;
          this.src = this.path + this.imgNum + ".jpg";
        }
       }
}
