import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movies',
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./movies/movies.routes').then((m) => m.routes),
      },
    ],
  },
];
