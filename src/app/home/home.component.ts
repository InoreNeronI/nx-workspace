import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  public promiseClick(): void {
    this.router.navigate(['/promise']);
  }

  public observableClick(): void {
    this.router.navigate(['/observable']);
  }

  public observableVsPromiseClick(): void {
    this.router.navigate(['/observablevspromise']);
  }

  public observableVsSubjectClick(): void {
    this.router.navigate(['/observablevssubject']);
  }

  public subjectVsReplaysubjectVsBeehaviorsubjectClick(): void {
    this.router.navigate(['/subjectvsreplaysubjectvsbeehaviorsubject']);
  }

}
