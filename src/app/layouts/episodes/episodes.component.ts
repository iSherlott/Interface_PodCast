import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../../services";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.component.html",
  styleUrls: ["./episodes.component.css"],
})
export class EpisodesComponent implements OnInit {
  public duration!: number;
  public episodeNumber!: number;
  public name!: string;
  public song: any;
  public description!: string;
  public cover!: string;
  public participants!: Array<String>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get("id");

    this.apiService.episode(id!).subscribe((data) => {
      this.duration = data.duration;
      this.song = new Audio(data.audio);
      this.name = data.name;
      this.description = data.description;
      this.cover = data.cover;
      this.participants = data.participants;
      this.episodeNumber = data.episodeNumber;
    });
  }

  ngOnInit(): void {}
}
