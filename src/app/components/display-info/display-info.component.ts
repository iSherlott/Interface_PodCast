import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-display-info",
  templateUrl: "./display-info.component.html",
  styleUrls: ["./display-info.component.css"],
})
export class DisplayInfoComponent implements OnInit {
  @Input() public episodeNumber!: number;
  @Input() public description!: string;
  @Input() public name!: string;

  constructor() {}

  ngOnInit(): void {}
}
