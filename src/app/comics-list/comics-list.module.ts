import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ComicsListComponent],
  exports: [ComicsListComponent]
})
export class ComicsListModule { }
