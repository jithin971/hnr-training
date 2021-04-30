import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TitleDirective } from './directives/title.directive';
import { DiscountPipe } from './pipes/discount.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LimitLengthPipe } from './pipes/limit-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscountPipe,
    LimitLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
