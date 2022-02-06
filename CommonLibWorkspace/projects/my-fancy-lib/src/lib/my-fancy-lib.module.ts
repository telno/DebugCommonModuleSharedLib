import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyFancyLibComponent } from './my-fancy-lib.component';

@NgModule({
  declarations: [
    MyFancyLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFancyLibComponent
  ]
})
export class MyFancyLibModule { }
