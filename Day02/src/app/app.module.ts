import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';


import { AppComponent } from './app.component';
import {ManualComponent} from './components/manualComponent/manualComponent.component';
import { AutoComponentComponent } from './components/auto-component/auto-component.component'

@NgModule({
  declarations: [
    AppComponent,ManualComponent, AutoComponentComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
