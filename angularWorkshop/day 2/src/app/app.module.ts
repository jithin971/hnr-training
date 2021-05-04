import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlinestyleComponent } from './component/inlinestyle/inlinestyle.component';
import { NgclassStyleComponent } from './component/ngclass-style/ngclass-style.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';
import { TowayComponent } from './component/toway/toway.component';
import { SwitchcaseComponent } from './component/switchcase/switchcase.component';
import { BuitinpipeComponent } from './component/buitinpipe/buitinpipe.component';
import { TsxPipe } from './pipes/tsx.pipe';
import { CustomePipeComponent } from './component/custome-pipe/custome-pipe.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    InlinestyleComponent,
    NgclassStyleComponent,
    PropertyBindingComponent,
    TowayComponent,
    SwitchcaseComponent,
    BuitinpipeComponent,
    TsxPipe,
    CustomePipeComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
