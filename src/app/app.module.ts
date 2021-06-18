import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PodcastComponent, EpisodesComponent } from "./layouts";

import { LogoComponent, ListComponent, AboutComponent } from "./components";

import { TimeFormatPipe } from "./pipes";
import { CoverComponent } from './components/cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    EpisodesComponent,
    LogoComponent,
    ListComponent,
    AboutComponent,
    TimeFormatPipe,
    CoverComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
