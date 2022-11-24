import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { MusicModule } from "./pages/music/music.module";
import {AdminModule} from "./pages/music/admin/admin.module";

import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MusicModule,
    AdminModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
