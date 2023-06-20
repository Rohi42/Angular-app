import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchoolAdministrationLoginComponent } from './school-administration-login/school-administration-login.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolAdministrationLoginComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
