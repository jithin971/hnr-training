import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { BuyComponent } from './components/buy/buy.component';
import { RentComponent } from './components/rent/rent.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PurchaseComponent,
    BuyComponent,
    RentComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
