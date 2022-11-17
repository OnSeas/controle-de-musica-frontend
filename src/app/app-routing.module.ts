import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRoutes} from "./pages/home/home.routing";
import {CrudMusicaRoutes} from "./pages/admin/crud-musica/crud.routing";

const routes: Routes = [
  ...HomeRoutes,
  ...CrudMusicaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
