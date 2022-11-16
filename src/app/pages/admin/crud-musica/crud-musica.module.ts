import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudMusicaRoutes } from './crud.routing';
import { MusicaListComponent } from './musica-list/musica-list.component';
import { MusicaFormComponent } from './musica-form/musica-form.component';

import {MatListModule} from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MusicaListComponent,
    MusicaFormComponent
  ],
  imports: [
    CommonModule,
    CrudMusicaRoutes,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CrudMusicaModule { }
