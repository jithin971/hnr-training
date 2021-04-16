import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { OfferComponent } from './list-item/offer/offer.component';
import { SearchItemComponent } from './list-item/search-item/search-item.component';
import { ViewallComponent } from './list-item/viewall/viewall.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { AuthguardGuard } from './services/authguard.guard';
import { AuthguardchildGuard } from './services/authguardchild.guard';
import { DeactivatecompGuard } from './services/deactivatecomp.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'viewItem', component: ListItemComponent, canActivate: [AuthguardGuard],canActivateChild:[AuthguardchildGuard], children: [
      { path: 'search', component: SearchItemComponent },
      { path: 'viewAll', component: ViewallComponent },
      { path: 'offer', component: OfferComponent }
    ]
  },
  {
    path: 'purchase', component: PurchaseComponent,canDeactivate:[DeactivatecompGuard]
  },
  {
    path: 'sales',loadChildren:()=>import('src/app/sales/sales.module').then(i=>i.SalesModule)
  },
  {
    path: 'login', component: LoginComponent
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
