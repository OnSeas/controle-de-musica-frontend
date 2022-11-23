import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaListComponent } from './musica-list/musica-list.component';
import { MusicaFormComponent } from './musica-form/musica-form.component';

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';

import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MusicaListComponent,
    MusicaFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatTableModule
  ]
})
export class CrudMusicaModule { }
