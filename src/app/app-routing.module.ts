import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRoutes} from "./pages/home/home.routing";

const routes: Routes = [
  ...HomeRoutes,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'musicas',
    loadChildren: () => import('./pages/music/music.module').then(mod => mod.MusicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
