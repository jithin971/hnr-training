import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeemoduleRoutingModule } from './employeemodule-routing.module';
import { VewallComponent } from './components/vewall/vewall.component';
import { DetailsComponent } from './components/details/details.component';
import { EmployeemoduleComponent } from './employeemodule.component';


@NgModule({
  declarations: [
    VewallComponent,
    DetailsComponent,
    EmployeemoduleComponent,
  ],
  imports: [
    CommonModule,
    EmployeemoduleRoutingModule
  ]
})
export class EmployeemoduleModule { }
