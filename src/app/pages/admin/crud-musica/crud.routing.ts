import { RouterModule, Routes } from '@angular/router';
import {MusicaListComponent} from "./musica-list/musica-list.component";
import {MusicaFormComponent} from "./musica-form/musica-form.component";

export const CrudMusicaRoutes: Routes = [
    {
      path: "admin/musica",
      component: MusicaListComponent,
      children: [
        {
          path: "",
          component: MusicaListComponent
        },
        {
          path: "novo",
          component: MusicaFormComponent
        },
        {
          path: "editar:id",
          component: MusicaFormComponent
        }
      ]
    }
  ];
