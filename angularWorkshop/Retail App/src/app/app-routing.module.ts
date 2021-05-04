import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ListItemComponent } from './list-item/list-item.component';
import { OfferComponent } from './list-item/offer/offer.component';
import { SearchItemComponent } from './list-item/search-item/search-item.component';
import { ViewallComponent } from './list-item/viewall/viewall.component';
import { LoginComponent } from './login/login.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableshelperComponent } from './observableshelper/observableshelper.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { AuthguardGuard } from './services/authguard.guard';
import { AuthguardchildGuard } from './services/authguardchild.guard';
import { DeactivatecompGuard } from './services/deactivatecomp.guard';
import { UserComponent } from './user/user.component';
import { UserwithFormBuilderComponent } from './userwith-form-builder/userwith-form-builder.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'viewItem', component: ListItemComponent, children: [
      { path: 'search', component: SearchItemComponent },
      { path: 'viewAll', component: ViewallComponent },
      { path: 'offer', component: OfferComponent }
    ]
  },
  {
    path: 'purchase', component: PurchaseComponent, canDeactivate: [DeactivatecompGuard]
  },
  {
    path: 'sales', loadChildren: () => import('src/app/sales/sales.module').then(i => i.SalesModule)
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'user2', component: UserwithFormBuilderComponent
  },
  {
    path: 'lifecycle', component: LifecycleComponent
  },
  {
    path: 'obser', component: ObservablesComponent, children: [
      { path: '', component: ObservableshelperComponent }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
