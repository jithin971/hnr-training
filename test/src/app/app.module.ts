import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { UrlSerializer } from '@angular/router';
import { StandardUrlSerializerService } from './services/standard-url-serializer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: StandardUrlSerializerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
