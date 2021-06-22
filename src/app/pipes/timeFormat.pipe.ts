import { Pipe, PipeTransform } from "@angular/core";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

@Pipe({
  name: "timeFormat",
})
export class TimeFormatPipe implements PipeTransform {
  transform(data: number): string {
    let seconds;
    let minutes;

    if (data < 60) {
      seconds = data < 10 ? `00:0${data}` : `00:${data}`;

      return seconds;
    } else {
      seconds = data % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      minutes = data % 60 == 0 ? data : (data - (data % 60)) / 60;

      return `${minutes}:${seconds}`;
    }
  }
}
