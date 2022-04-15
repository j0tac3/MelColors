import { Routes, RouterModule } from '@angular/router';
import { ColorListComponent } from 'src/app/components/color-list/color-list.component';
import { MenuCompaniesComponent } from 'src/app/components/menu-companies/menu-companies.component';

export const HOME_ROUTES: Routes = [
    {path: 'menucompany', component: MenuCompaniesComponent },
    {path: 'colors/:company', component: ColorListComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'menucompany'}
];