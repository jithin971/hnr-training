import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { FormsModule } from '@angular/forms';
import { IfelseComponent } from './component/ifelse/ifelse.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { CommonModule } from '@angular/common';
import { Itemlist2Component } from './component/itemlist2/itemlist2.component';
import { DetailsComponent } from './component/details/details.component';
import { Childroure1Component } from './component/childroure1/childroure1.component';
import { ChildAuthguardGuard } from './service/child-authguard.guard';
import { AuthguardGuard } from './service/authguard.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    IfelseComponent,
    HomeComponent,
    ErrorComponent,
    Itemlist2Component,
    DetailsComponent,
    Childroure1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
