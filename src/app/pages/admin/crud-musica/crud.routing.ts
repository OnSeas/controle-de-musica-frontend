import { RouterModule, Routes } from '@angular/router';
import {MusicaListComponent} from "./musica-list/musica-list.component";
import {MusicaFormComponent} from "./musica-form/musica-form.component";

export const CrudMusicaRoutes: Routes = [
    {
      //path: "musica",
      //component: MusicaListComponent, // TODO Criar os componentes de Musica View List e Music View (são os que incluem apenas view e a funcionalidade)
      //children: []

    },

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
        },
        {
          path: "visualizar:id",
          component: MusicaFormComponent
        }
      ]
    }
  ];
