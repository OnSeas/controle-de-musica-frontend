import {Routes} from '@angular/router';
import {MusicListComponent} from "./music-list/music-list.component";
import {MusicFormComponent} from "./music-form/music-form.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    component: MusicListComponent
  },
  {
    path: "novo",
    component: MusicFormComponent
  },
  {
    path: "editar/:id",
    component: MusicFormComponent
  },
];
