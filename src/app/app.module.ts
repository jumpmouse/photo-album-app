import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
