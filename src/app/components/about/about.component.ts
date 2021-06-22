import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "src/app/services";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  public descriptionAbout!: string;

  constructor(public apiService: ApiService) {
    this.apiService.dataBase().subscribe((res) => {
      this.descriptionAbout = res.description;
    });
  }

  ngOnInit(): void {}
}
