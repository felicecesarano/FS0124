import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EvidenzaComponent } from './components/evidenza/evidenza.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { ConsigliComponent } from './components/consigli/consigli.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EvidenzaComponent,
    DettagliComponent,
    ConsigliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
