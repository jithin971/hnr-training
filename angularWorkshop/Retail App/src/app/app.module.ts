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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ValidateInputDirective } from './directive/validate-input.directive';
import { UserComponent } from './user/user.component';
import { UserwithFormBuilderComponent } from './userwith-form-builder/userwith-form-builder.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableshelperComponent } from './observableshelper/observableshelper.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleHelperComponent } from './lifecycle-helper/lifecycle-helper.component';
import { ForviewChildDirective } from './directive/forview-child.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterseptorService } from './services/interseptor.service';
import { PhoneDirective } from './directive/phone.directive';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    ListItemComponent,
    HomeComponent,
    SearchItemComponent,
    ViewallComponent,
    OfferComponent,
    LoginComponent,
    ValidateInputDirective,
    UserComponent,
    UserwithFormBuilderComponent,
    ObservablesComponent,
    ObservableshelperComponent,
    LifecycleComponent,
    LifecycleHelperComponent,
    ForviewChildDirective,
    PhoneDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterseptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
