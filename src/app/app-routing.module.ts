import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PodcastComponent, EpisodesComponent } from "./layouts";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "podcast",
  },
  {
    path: "podcast",
    component: PodcastComponent,
  },
  {
    path: "episodes/:id",
    component: EpisodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
