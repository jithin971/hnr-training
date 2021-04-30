import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', loadChildren: () => import('./module/book/book.module').then(res => res.BookModule) },
  { path: 'purchase', loadChildren: () => import('./module/purchase/purchase.module').then(res =>res.PurchaseModule) },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
