import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestService} from './rest-service.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {JumbotronModule} from './jumbotron/jumbotron.module';
import {ComicsListModule} from './comics-list/comics-list.module';
import {ComicsService} from './comics.service';
import {ModalModule} from 'ngx-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JumbotronModule,
    ModalModule,
    ComicsListModule
  ],
  providers: [RestService, ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
