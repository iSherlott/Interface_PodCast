import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PodcastComponent, EpisodesComponent } from "./layouts";

import { LogoComponent, ListComponent, AboutComponent } from "./components";

import { TimeFormatPipe } from "./pipes";
import { CoverComponent } from "./components/cover/cover.component";
import { DisplayComponent } from "./components/display/display.component";
import { DisplayInfoComponent } from "./components/display-info/display-info.component";

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
    DisplayComponent,
    DisplayInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
