import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicFormComponent } from './music-form/music-form.component';
import {RouterModule} from "@angular/router";
import {AdminRoutes} from "./admin.routing";

import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MusicListComponent,
    MusicFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class AdminModule { }
