import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'observable-promise-learning-observable-vs-subject',
  templateUrl: './observable-vs-subject.component.html',
  styleUrls: ['./observable-vs-subject.component.scss'],
  standalone: true,
})
export class ObservableVsSubjectComponent {
  public observableData1: string | number = '';
  public observableData2: string | number = '';
  public subjectData1: string | number = '';
  public subjectData2: string | number = '';

  public getObservableData(): void {
    let myObservable = new Observable<string | number>((observar) => {
      // observar.next("Observable Hello world!");
      observar.next(Math.floor(Math.random() * 99) + 1);
    });

    myObservable.subscribe((data) => {
      this.observableData1 = data;
    });

    myObservable.subscribe((data) => {
      this.observableData2 = data;
    });
  }

  public getSubjectData(): void {
    let mySubject = new Subject();

    mySubject.subscribe((data: any) => {
      this.subjectData1 = data;
    });

    mySubject.subscribe((data: any) => {
      this.subjectData2 = data;
    });

    // mySubject.next("Subject Hello world!");
    mySubject.next(Math.floor(Math.random() * 99) + 1);
  }

}
