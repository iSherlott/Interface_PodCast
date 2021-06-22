import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.css"],
})
export class CoverComponent implements OnInit {
  @Input() cover!: string;

  constructor() {}

  ngOnInit(): void {}
}
