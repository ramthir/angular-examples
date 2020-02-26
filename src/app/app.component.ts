import { Component } from "@angular/core";
import { fromEvent, of } from "rxjs";
import { skipUntil, takeUntil, repeat, withLatestFrom } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  down$ = fromEvent(document, "mousedown");
  up$ = fromEvent(document, "mouseup");

  constructor() {
    this.up$.pipe(
      withLatestFrom(this.down$))
      .subscribe(console.log);
  }
}
