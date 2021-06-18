import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.component.html",
  styleUrls: ["./episodes.component.css"],
})
export class EpisodesComponent implements OnInit {
  public episodeNumber: number = 2;
  public duration: number = 1125;
  public name: string = "Produtividade no home office";
  public description: string =
    "Home office ou escrit\u00f3rio em casa, tamb\u00e9m chamado de trabalho remoto, trabalho \u00e0 dist\u00e2ncia ou teletrabalho, \u00e9 uma tend\u00eancia mundial que a cada ano ganha mais adeptos. O mundo mudou e o mercado de trabalho foi for\u00e7ado a passar por uma revolu\u00e7\u00e3o de todos seus sistemas e condutas impostas, o home office foi uma das grandes estrat\u00e9gias adotadas para o mercado sustentar a crise provocada pela pandemia. No epis\u00f3dio de hoje vamos falar sobre como ser mais produtivo nessa nova realidade.";
  public cover: string =
    "https://api-frontend-test.brlogic.com/podcast/episodes/429/cover.jpeg";
  public audio: string =
    "https://api-frontend-test.brlogic.com/podcast/episodes/429/audio.mp3";
  public participants: Array<String> = ["Thomas do Deskless"];

  constructor() {}

  ngOnInit(): void {}
}
