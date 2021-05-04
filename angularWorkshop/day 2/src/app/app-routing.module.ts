import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchcaseComponent } from './component/switchcase/switchcase.component';
import { TowayComponent } from './component/toway/toway.component';

const routes: Routes = [
  {
    path:'',component:TowayComponent
  },
  {
    path:'asd',component:SwitchcaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
