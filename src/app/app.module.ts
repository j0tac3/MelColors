import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorCardComponent } from './components/color-card/color-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorListComponent,
    ColorCardComponent,
    HeaderComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
