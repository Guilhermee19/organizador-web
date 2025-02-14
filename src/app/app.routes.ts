import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Organizador',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
