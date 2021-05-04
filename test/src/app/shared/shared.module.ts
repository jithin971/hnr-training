import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { TitleDirective } from '../directives/title.directive';
import { LimitLengthPipe } from '../pipes/limit-length.pipe';


@NgModule({
  declarations: [TitleDirective,LimitLengthPipe],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports:[MatRadioModule,TitleDirective,LimitLengthPipe]
})
export class SharedModule { }
