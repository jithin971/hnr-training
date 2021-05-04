import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirComponent } from './directives/custom-dir/custom-dir.component';
import { StrdirDirective } from './directives/strdir.directive';
import { StructuralDirDirective } from './directives/structural-dir.directive';
import { NgifelseComponent } from './component/ngifelse/ngifelse.component';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { RoutingwparaComponent } from './component/routingwpara/routingwpara.component';
import { NextRouteComponent } from './component/next-route/next-route.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirComponent,
    StrdirDirective,
    StructuralDirDirective,
    NgifelseComponent,
    RoutingwparaComponent,
    NextRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
