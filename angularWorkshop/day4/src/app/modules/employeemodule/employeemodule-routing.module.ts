import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VewallComponent } from './components/vewall/vewall.component';

const routes: Routes = [
  {
    path:'',component:VewallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeemoduleRoutingModule { }
