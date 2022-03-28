import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from 'src/app/components/admin/category/category.component';
import { ColorComponent } from 'src/app/components/admin/color/color.component';
import { CompanyComponent } from 'src/app/components/admin/company/company.component';
import { UserComponent } from 'src/app/components/admin/user/user.component';

export const ADMINISTRAR_ROUTES: Routes = [
    {path: 'users', component: UserComponent },
    {path: 'companies', component: CompanyComponent },
    {path: 'categories', component: CategoryComponent },
    {path: 'colors', component: ColorComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'administrar'}
];