import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-replaysubject-vs-beehaviorsubject',
  templateUrl: './subject-vs-replaysubject-vs-beehaviorsubject.component.html',
  styleUrls: ['./subject-vs-replaysubject-vs-beehaviorsubject.component.scss']
})
export class SubjectVsReplaysubjectVsBeehaviorsubjectComponent {

  public myData: any[] = [];
  public subject = new BehaviorSubject(33);

  public emitData(): void {
    this.subject.next(1);
    console.log(1);
    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 3000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 6000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 9000);
    setTimeout(() => {
      this.subject.next(5);
      console.log(5);
    }, 12000);
  }

  public getData(): void {
    console.log("Subscribed!");
    this.subject.subscribe((data: any) => {
      this.myData.push(data);
    });
  }
}
