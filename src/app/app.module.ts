import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/admin/menu-principal/menu-principal.component';
import { UserCatalogoComponent } from './components/admin/user-catalogo/user-catalogo.component';
import { ProductsCatalogoComponent } from './components/admin/products-catalogo/products-catalogo.component';
import { NavegadorComponent } from './components/admin/navegador/navegador.component';
import { AddUserComponent } from './components/admin/user-catalogo/add-user/add-user.component';
import { ListUserComponent } from './components/admin/user-catalogo/list-user/list-user.component';
import { NavBarComponent } from './components/waiter/nav-bar/nav-bar.component';
import { MainComponent } from './components/waiter/main/main.component';
import { OrdersComponent } from './components/waiter/orders/orders.component';
import { RecordComponent } from './components/waiter/record/record.component';
import { ModalEditComponent } from './components/admin/user-catalogo/list-user/modal/modal-edit/modal-edit.component';
import { ModalDeleteComponent } from './components/admin/user-catalogo/list-user/modal/modal-delete/modal-delete.component';
import { ModalAddComponent } from './components/admin/user-catalogo/add-user/modal-add/modal-add.component';
import { AddProductsComponent } from './components/admin/products-catalogo/add-products/add-products.component';
import { ListProductsComponent } from './components/admin/products-catalogo/list-products/list-products.component';
import { ModalAddProductsComponent } from './components/admin/products-catalogo/add-products/modal-add-products/modal-add-products.component';
import { ModalDeleteProductsComponent } from './components/admin/products-catalogo/list-products/modal/modal-delete-products/modal-delete-products.component';
import { ModalEditProductsComponent } from './components/admin/products-catalogo/list-products/modal/modal-edit-products/modal-edit-products.component';
import { MainKComponent } from './components/kitchener/main-k/main-k.component';
import { NavBarKComponent } from './components/kitchener/nav-bar-k/nav-bar-k.component';
import { PendingComponent } from './components/kitchener/pending/pending.component';
import { DoneComponent } from './components/kitchener/done/done.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    UserCatalogoComponent,
    NavegadorComponent,
    ProductsCatalogoComponent,
    AddUserComponent,
    ListUserComponent,
    NavBarComponent,
    MainComponent,
    OrdersComponent,
    RecordComponent,
    ModalEditComponent,
    ModalDeleteComponent,
    ModalAddComponent,
    AddProductsComponent,
    ListProductsComponent,
    ModalAddProductsComponent,
    ModalDeleteProductsComponent,
    ModalEditProductsComponent,
    MainKComponent,
    NavBarKComponent,
    PendingComponent,
    DoneComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
