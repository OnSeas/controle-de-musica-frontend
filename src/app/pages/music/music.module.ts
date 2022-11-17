import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaListViewComponent } from './musica-list-view/musica-list-view.component';
import { MusicViewComponent } from './music-view/music-view.component';


@NgModule({
  declarations: [
    MusicaListViewComponent,
    MusicViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MusicModule { }
