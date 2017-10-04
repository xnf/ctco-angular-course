import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron.component';
import {ModalModule} from 'ngx-modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [JumbotronComponent],
  exports: [JumbotronComponent]
})
export class JumbotronModule { }
