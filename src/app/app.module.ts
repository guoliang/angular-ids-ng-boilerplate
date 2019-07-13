import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SohoComponentsModule } from 'ids-enterprise-ng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SohoComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
