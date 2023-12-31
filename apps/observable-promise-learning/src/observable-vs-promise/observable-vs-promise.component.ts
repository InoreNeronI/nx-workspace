import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observable-promise-learning-observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.scss'],
  standalone: true,
})
export class ObservableVsPromiseComponent {
  public myObservable: any;
  public myPromise: any;
  public mySubscription: any;

  public create(): void {
    this.myObservable = new Observable<string>((observer) => {
      // console.log("Observable has created");
      // observer.next("Observable has emitted 1");
      // observer.next("Observable has emitted 2");
      // observer.next("Observable has emitted 3");

      // setInterval(() => {
      //   observer.next("Observable is emitting data");
      // }, 1000);

      observer.next('Observable has emitted');
    });

    this.myPromise = new Promise<string>((resolve) => {
      // console.log("Promise has created");
      // resolve("Promise has emitted 1");
      // resolve("Promise has emitted 2");
      // resolve("Promise has emitted 3");

      // setInterval(() => {
      //   resolve("Promise is emitting data");
      // }, 1000);

      resolve('Promise has emitted');
    });
  }

  execute() {
    this.mySubscription = this.myObservable.subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {},
      () => {
        console.log('Observable complete!');
      },
    );

    this.myPromise.then(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {},
      () => {
        console.log('Promise complete!');
      },
    );
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }
}
