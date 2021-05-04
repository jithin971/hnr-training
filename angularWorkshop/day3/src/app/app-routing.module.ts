import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextRouteComponent } from './component/next-route/next-route.component';
import { NgifelseComponent } from './component/ngifelse/ngifelse.component';
import { RoutingwparaComponent } from './component/routingwpara/routingwpara.component';
import { CustomDirComponent } from './directives/custom-dir/custom-dir.component';

const routes: Routes = [
  {
    path:'',component:NgifelseComponent
  },
  {
    path:'home/:id',component:RoutingwparaComponent
  },{
    path:'nextRoute',component:NextRouteComponent
  },{
    path:'custome',component:CustomDirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
