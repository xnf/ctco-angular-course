import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestService} from './rest-service.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {JumbotronModule} from "./jumbotron/jumbotron.module";
import {ComicsListModule} from './comics-list/comics-list.module';
import {ComicsService} from './comics.service';
import {SharedModule} from './shared/shared.module';
import { SomethingComponent } from './something/something.component';

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JumbotronModule,
    SharedModule,
    ComicsListModule
  ],
  providers: [RestService, ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
