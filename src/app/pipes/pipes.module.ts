import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollarPipe } from './dollar.pipe';

@NgModule({
 declarations: [
   DollarPipe,
   ],
   imports: [
     CommonModule
   ],
   exports:[
     DollarPipe,
  ],

})
export class PipeModule { }
