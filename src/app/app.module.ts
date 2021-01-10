import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundComponent } from './playground/playground.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PlaygroundComponent, PersonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
