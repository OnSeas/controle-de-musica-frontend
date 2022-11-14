import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRoutes} from "./pages/home/home.routing";

const routes: Routes = [
  ...HomeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
