import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestServiceService} from "./rest-service.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
