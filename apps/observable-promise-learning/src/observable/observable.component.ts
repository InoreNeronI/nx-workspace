import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observable-promise-learning-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  standalone: true,
})
export class ObservableComponent implements OnInit {
  public data: number[] = [];
  public count: number = 0;
  public myObservable: any;

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        this.data.push(this.count);
        if (this.count < 5) {
          observer.next(this.data);
        } else {
          observer.error('DB error!');
          // observer.complete();
        }
      }, 1000);
    });
  }

  public getData(): void {
    this.myObservable.subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('Observable complete!');
      },
    );
    // console.log(this.data);
  }
}
