import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';
import { DurationPipe } from './pipes/duration.pipe';




// Module for shared components like modals, tabs, btns etc
@NgModule({
  declarations: [
    DateComponent,
    DurationComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DateComponent,
    DurationComponent,
    DurationPipe
  ]
})
export class SharedModule { }
