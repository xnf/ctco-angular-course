import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JumbotronComponent],
  exports: [JumbotronComponent]
})
export class JumbotronModule { }
