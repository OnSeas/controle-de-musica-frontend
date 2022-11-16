import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicaListViewComponent} from "./musica-list-view/musica-list-view.component";
import {MusicViewComponent} from "./music-view/music-view.component";

export const MusicRoutes: Routes = [
  {
    path: "musicas",
    component: MusicaListViewComponent,
    children: [
      {
        path: "",
        component: MusicaListViewComponent
      },
      {
        path: "favoritas",
        component: MusicaListViewComponent
      },
      {
        path: "Visualizar/:titulo",
        component: MusicViewComponent
      }
    ]
  }
];
