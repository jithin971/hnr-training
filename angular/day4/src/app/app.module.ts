import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HomeComponent } from './home/home.component';
import { SearchItemComponent } from './list-item/search-item/search-item.component';
import { ViewallComponent } from './list-item/viewall/viewall.component';
import { OfferComponent } from './list-item/offer/offer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    ListItemComponent,
    HomeComponent,
    SearchItemComponent,
    ViewallComponent,
    OfferComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
