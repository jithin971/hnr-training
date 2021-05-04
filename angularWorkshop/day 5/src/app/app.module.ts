import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecyclechildComponent } from './components/lifecyclechild/lifecyclechild.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewAllComponent } from './components/view-all/view-all.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsexComponent } from './components/rxjsex/rxjsex.component';
import { RxjschildComponent } from './components/rxjschild/rxjschild.component';
import { HttpinterseptorService } from './services/httpinterseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    LifecyclechildComponent,
    UserComponent,
    ViewAllComponent,
    RxjsexComponent,
    RxjschildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: HttpinterseptorService,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
