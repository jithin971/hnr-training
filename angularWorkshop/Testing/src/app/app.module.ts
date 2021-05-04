import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnumberComponent } from './components/addnumber/addnumber.component';
import { MachersComponent } from './components/machers/machers.component';
import { TestinputoutputComponent } from './components/testinputoutput/testinputoutput.component';
import { ReactiveFormtestComponent } from './components/reactive-formtest/reactive-formtest.component';
import { TestpipePipe } from './pipes/testpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddnumberComponent,
    MachersComponent,
    TestinputoutputComponent,
    ReactiveFormtestComponent,
    TestpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
