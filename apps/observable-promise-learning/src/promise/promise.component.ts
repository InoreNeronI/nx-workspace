import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'observable-promise-learning-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class PromiseComponent implements OnInit {
  public isOnline: boolean = false;
  public status: string = 'offline';
  public myPromise: any;

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then(
      (response: any) => {
        console.log(response);
        this.checkLogic();
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('Promise complete!');
      },
    );
  }

  public getStatus() {
    console.log('getStatus called');
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('Recieved status value');
        this.isOnline = true;
        resolve(this.isOnline);
        // reject("DB error!")
      }, 3000);
    });
  }

  public checkLogic() {
    console.log('checkLogic called');
    if (this.isOnline) {
      this.status = 'online';
    } else {
      this.status = 'offline';
    }
  }
}
