import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ViewallComponent } from './components/viewall/viewall.component';

const routes: Routes = [
  {
    path: 'create', component: CreateComponent
  },
  {
    path: "view", component: ViewallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
