import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { MainComponent } from './src/main.component';

const routes: Routes = [{ path: '', component: MainComponent }, { path: '**', redirectTo: '' }];
export const mainConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule), provideRouter(routes, withComponentInputBinding())]
};
