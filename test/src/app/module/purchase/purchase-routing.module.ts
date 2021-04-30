import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './components/buy/buy.component';
import { RentComponent } from './components/rent/rent.component';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {path:'',component:PurchaseComponent},
  {
    path:'buy',component:BuyComponent
  },
  {
    path:'rent',component:RentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
