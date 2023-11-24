import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './src/main.component';
import { mainConfig } from './main.config';

bootstrapApplication(MainComponent, mainConfig).catch((err) =>
  console.error(err),
);
