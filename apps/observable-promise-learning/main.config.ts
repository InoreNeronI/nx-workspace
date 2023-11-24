import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from './src/home/home.component';
import { ObservableComponent } from './src/observable/observable.component';
import { ObservableVsPromiseComponent } from './src/observable-vs-promise/observable-vs-promise.component';
import { ObservableVsSubjectComponent } from './src/observable-vs-subject/observable-vs-subject.component';
import { PromiseComponent } from './src/promise/promise.component';
import { SubjectVsReplaysubjectVsBeehaviorsubjectComponent } from './src/subject-vs-replaysubject-vs-beehaviorsubject/subject-vs-replaysubject-vs-beehaviorsubject.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'observablevspromise', component: ObservableVsPromiseComponent },
  { path: 'observablevssubject', component: ObservableVsSubjectComponent },
  {
    path: 'subjectvsreplaysubjectvsbeehaviorsubject',
    component: SubjectVsReplaysubjectVsBeehaviorsubjectComponent,
  },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  //{ path: '**', redirectTo: '' }
];
export const mainConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
