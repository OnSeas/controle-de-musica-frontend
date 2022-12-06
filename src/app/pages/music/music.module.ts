import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicListViewComponent } from './music-list-view/music-list-view.component';
import { MusicViewComponent } from './music-view/music-view.component';
import {RouterModule} from "@angular/router";
import {MusicRoutes} from "./music.routing";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    MusicListViewComponent,
    MusicViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MusicRoutes),
    MatIconModule,
    MatTableModule
  ]
})
export class MusicModule { }
