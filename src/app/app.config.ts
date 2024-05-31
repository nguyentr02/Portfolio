import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';

NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [],
  imports: [
    MatToolbarModule,
  ],
})
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
