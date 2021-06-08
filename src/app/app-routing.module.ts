import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { MenuPrincipalComponent } from '../app/components/admin/menu-principal/menu-principal.component'
import { NavegadorComponent } from './components/admin/navegador/navegador.component';
import { UserCatalogoComponent } from '../app/components/admin/user-catalogo/user-catalogo.component';
import { ProductsCatalogoComponent } from '../app/components/admin/products-catalogo/products-catalogo.component';
import { MainComponent } from './components/waiter/main/main.component';
import { OrdersComponent } from './components/waiter/orders/orders.component';
import { RecordComponent } from './components/waiter/record/record.component';
import { MainKComponent } from './components/kitchener/main-k/main-k.component';
import { PendingComponent } from './components/kitchener/pending/pending.component';
import { DoneComponent } from './components/kitchener/done/done.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navegador', component: NavegadorComponent },
  {
    path: 'menuprincipal', component: MenuPrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'usercatalogoadmin', component: UserCatalogoComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: '', redirectTo: 'usercatalogoadmin', pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'productoscatalogoadmin', component: ProductsCatalogoComponent,
        canActivateChild: [AuthGuard]
      },
    ],
  },
  {
    path: 'mainWaiter', component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'orders', pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'orders', component: OrdersComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: 'record', component: RecordComponent,
        canActivateChild: [AuthGuard]
      }
    ],
  },
  {
    path: 'mainkitchener', component: MainKComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'pending', pathMatch: 'full',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'pending', component: PendingComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: 'done', component: DoneComponent,
        canActivateChild: [AuthGuard]
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
