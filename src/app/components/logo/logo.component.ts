import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent implements OnInit {
  public img: string =
    "https://api-frontend-test.brlogic.com/podcast/cover.jpeg";
  public title: string = "Podlogic";
  public episode: number = 6;

  constructor() {}

  ngOnInit(): void {}
}
