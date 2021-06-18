import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeFormat",
})
export class TimeFormatPipe implements PipeTransform {
  transform(data: number): string {
    let seconds;
    let minutes;

    if (data < 60) {
      seconds = data < 9 ? `00:${data / 60}` : `00:0${data / 60}`;

      return seconds;
    } else {
      seconds = data % 60;
      seconds = seconds < 9 ? `0${seconds}` : seconds;

      minutes = data % 60 == 0 ? data : (data - (data % 60)) / 60;

      return `${minutes}:${seconds}`;
    }
  }
}
