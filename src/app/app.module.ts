import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderContentComponent } from './drinks/components/header-content/header-content.component';
import { FooterContentComponent } from './drinks/components/footer-content/footer-content.component';
import { CocktailsTableComponent } from './drinks/components/cocktails-table/cocktails-table.component';
import { MaterialModule } from "../shared/material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    FooterContentComponent,
    CocktailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
