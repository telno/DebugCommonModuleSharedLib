import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFancyLibModule } from 'my-fancy-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFancyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
