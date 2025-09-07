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
        redirectTo: 'film-catalog',
      },
      {
        path: 'film-catalog',
        loadChildren: () =>
          import('./film-catalog/film-catalog.routes').then((m) => m.routes),
      },
    ],
  },
];
