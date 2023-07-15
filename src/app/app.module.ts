import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { ObservableVsSubjectComponent } from './observable-vs-subject/observable-vs-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromiseComponent,
    ObservableComponent,
    ObservableVsPromiseComponent,
    ObservableVsSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
