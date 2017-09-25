import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestService} from './rest-service.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {JumbotronModule} from "./jumbotron/jumbotron.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JumbotronModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
