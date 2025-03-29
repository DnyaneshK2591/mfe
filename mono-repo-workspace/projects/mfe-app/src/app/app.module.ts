import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfehomeComponent } from './mfehome/mfehome.component';
import { MfehomeModule } from './mfehome/mfehome.module';

@NgModule({
  declarations: [
    AppComponent,
    MfehomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfehomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
