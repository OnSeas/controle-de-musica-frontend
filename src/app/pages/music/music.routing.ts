import { Routes } from '@angular/router';
import {MusicListViewComponent} from './music-list-view/music-list-view.component';
import {MusicViewComponent} from "./music-view/music-view.component";
import {FavoritesComponent} from "./favorites/favorites.component";

export const MusicRoutes: Routes = [
  {
    path: '',
    component: MusicListViewComponent
  },
  {
    path: 'info/:id',
    component: MusicViewComponent
  },
  {
    path: 'favoritas',
    component: FavoritesComponent
  },
  {
    path: 'admin/musica',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
];
