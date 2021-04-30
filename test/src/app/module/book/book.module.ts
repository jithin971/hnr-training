import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { CreateComponent } from './components/create/create.component';
import { ViewallComponent } from './components/viewall/viewall.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookComponent,
    CreateComponent,
    ViewallComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
  ]
})
export class BookModule { }
