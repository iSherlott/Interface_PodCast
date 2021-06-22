import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "src/app/services";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public episodes: any;

  constructor(public apiService: ApiService) {
    this.apiService.dataBase().subscribe((res) => {
      this.episodes = res.episodes;
    });
  }

  ngOnInit(): void {}
}
