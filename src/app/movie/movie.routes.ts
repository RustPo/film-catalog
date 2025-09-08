import { Routes } from '@angular/router';
import { MoviePageComponent } from './_pages/movie-page/movie-page.component';

export const routes: Routes = [
  {
    path: ':movieId',
    component: MoviePageComponent,
  },
];
