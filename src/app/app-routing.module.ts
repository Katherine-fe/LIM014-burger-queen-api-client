import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { MenuPrincipalComponent } from '../app/components/admin/menu-principal/menu-principal.component'
import { NavegadorComponent } from './components/admin/navegador/navegador.component';
import { UserCatalogoComponent } from '../app/components/admin/user-catalogo/user-catalogo.component';
import { ProductsCatalogoComponent } from '../app/components/admin/products-catalogo/products-catalogo.component';
import { MainComponent } from './components/waiter/main/main.component';
import { OrdersComponent } from './components/waiter/orders/orders.component';
import { RecordComponent } from './components/waiter/record/record.component';
import { MainKComponent } from './components/kitchener/main-k/main-k.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navegador', component: NavegadorComponent },
  {
    path: 'menuprincipal', component: MenuPrincipalComponent,
    children: [
      { path: 'usercatalogoadmin', component: UserCatalogoComponent },
      { path: '', redirectTo: 'usercatalogoadmin', pathMatch: 'full' },
      { path: 'productoscatalogoadmin', component: ProductsCatalogoComponent },
    ],
  },
  {
    path: 'mainWaiter', component: MainComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: OrdersComponent },
      { path: 'record', component: RecordComponent }
    ],
  },
  { path: 'mainkitchener', component: MainKComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
