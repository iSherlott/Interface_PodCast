import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
  @Input() public duration!: number;
  @Input() public audioElement: any;

  public currentTime: number = 0;
  public play: boolean = false;
  public count!: ReturnType<typeof setTimeout>;

  constructor() {}

  ngOnInit(): void {}

  statusPlay() {
    this.play = !this.play;
    this.audioElement.play();
    this.currentTime = Math.floor(this.audioElement.currentTime);
    this.time();
  }

  time() {
    this.count = setInterval(() => {
      this.currentTime = Math.floor(this.audioElement.currentTime);
    }, 1000);
  }

  pause() {
    this.play = !this.play;
    this.audioElement.pause();
    this.currentTime = Math.floor(this.audioElement.currentTime);
    clearInterval(this.count);
  }

  console(value: any) {
    console.log(value);
  }
}
