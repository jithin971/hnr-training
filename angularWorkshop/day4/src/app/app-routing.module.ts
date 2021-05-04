import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Childroure1Component } from './component/childroure1/childroure1.component';
import { DetailsComponent } from './component/details/details.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { Itemlist2Component } from './component/itemlist2/itemlist2.component';
import { ParentComponent } from './component/parent/parent.component';
import { AuthguardGuard } from './service/authguard.guard';
import { ChildAuthguardGuard } from './service/child-authguard.guard';
import { DeactivateAuthguardGuard } from './service/deactivate-authguard.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'communication', redirectTo: 'parent'
  },
  {
    path: 'parent', component: ParentComponent,canDeactivate:[DeactivateAuthguardGuard]
  },
  {
    path: 'childroute', component: Childroure1Component,canActivateChild:[ChildAuthguardGuard], children: [
      {
        path: 'list', component: Itemlist2Component
      },
      {
        path: 'details/:id', component: DetailsComponent
      }
    ]
  },
  {
    path: 'employeeModule', loadChildren: () => import('src/app/modules/employeemodule/employeemodule.module').then(i => i.EmployeemoduleModule),
    canActivate:[AuthguardGuard]
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
