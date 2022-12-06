import { Routes } from '@angular/router';
import {MusicListViewComponent} from './music-list-view/music-list-view.component';
import {MusicViewComponent} from "./music-view/music-view.component";

export const MusicRoutes: Routes = [
  {
    path: 'listar',
    component: MusicListViewComponent
  },
  {
    path: 'info/:id',
    component: MusicViewComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: "full"
  },
  {
    path: 'admin/musica',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
];
