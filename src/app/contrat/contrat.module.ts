import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ContratComponent } from './contrat.component';

import { NouvcontratComponent } from '../nouvcontrat/nouvcontrat.component';




@NgModule({
  declarations: [
 
    ContratComponent,
    NouvcontratComponent
  ],

  imports: [
    BrowserModule,

  ],
  bootstrap: [ContratComponent]
})
export class ContratModule { }
