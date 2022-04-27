import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorCardComponent } from './components/color-card/color-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroComponent } from './components/filtro/filtro.component';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './components/admin/company/company.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { ColorComponent } from './components/admin/color/color.component';
import { UserComponent } from './components/admin/user/user.component';
import { MenuAdminComponent } from './components/admin/menu-admin/menu-admin.component';
import { ModalAddEditColorComponent } from './components/admin/color/modal-add-edit-color/modal-add-edit-color.component';
import { ModalAddEditCompanyComponent } from './components/admin/company/modal-add-edit-company/modal-add-edit-company.component';
import { ActionsComponent } from './components/admin/actions/actions.component';
import { ModalAddEditCategoryComponent } from './components/admin/category/modal-add-edit-category/modal-add-edit-category.component';
import { MenuCompaniesComponent } from './components/menu-companies/menu-companies.component';
import { MiniMenuCompaniesComponent } from './components/mini-menu-companies/mini-menu-companies.component';
import { ListOfColorsComponent } from './components/list-of-colors/list-of-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorListComponent,
    ColorCardComponent,
    HeaderComponent,
    BuscadorComponent,
    FiltroComponent,
    AdministrarComponent,
    CompanyComponent,
    CategoryComponent,
    ColorComponent,
    UserComponent,
    MenuAdminComponent,
    ModalAddEditColorComponent,
    ModalAddEditCompanyComponent,
    ActionsComponent,
    ModalAddEditCategoryComponent,
    MenuCompaniesComponent,
    MiniMenuCompaniesComponent,
    ListOfColorsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
