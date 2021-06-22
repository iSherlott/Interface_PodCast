import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "src/app/services";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent implements OnInit {
  @Input() public data!: string;

  public cover!: string;
  public title!: string;
  public episode!: string;

  constructor(public apiService: ApiService) {
    this.apiService.dataBase().subscribe((res) => {
      this.cover = res.cover;
      this.title = res.name;
      this.episode = res.episodes.length;
    });
  }

  ngOnInit(): void {}
}
