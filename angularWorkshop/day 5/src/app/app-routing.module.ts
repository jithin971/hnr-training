import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RxjschildComponent } from './components/rxjschild/rxjschild.component';
import { RxjsexComponent } from './components/rxjsex/rxjsex.component';
import { UserComponent } from './components/user/user.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

const routes: Routes = [
  {
    path: '', component: LifecycleComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'viewAll', component: ViewAllComponent
  }, {
    path: 'rxjs', component: RxjsexComponent, children: [
      { path: '', component: RxjschildComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
