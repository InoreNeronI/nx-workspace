import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { ObservableVsSubjectComponent } from './observable-vs-subject/observable-vs-subject.component';
import { SubjectVsReplaysubjectVsBeehaviorsubjectComponent } from './subject-vs-replaysubject-vs-beehaviorsubject/subject-vs-replaysubject-vs-beehaviorsubject.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'observablevspromise', component: ObservableVsPromiseComponent },
  { path: 'observablevssubject', component: ObservableVsSubjectComponent },
  { path: 'subjectvsreplaysubjectvsbeehaviorsubject', component: SubjectVsReplaysubjectVsBeehaviorsubjectComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
