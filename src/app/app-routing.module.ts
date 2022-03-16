import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  /* {path: 'administrar', component: AdministrarComponent,
    children: ADMINISTRAR_ROUTES,
  }, */
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
