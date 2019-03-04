import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { RessourceComponent } from './ressource.component';

@NgModule({
  declarations: [
 
    RessourceComponent
  ],
  imports: [
    BrowserModule, 
    
  ],
  providers: [],
  bootstrap: [RessourceComponent]
})
export class RessourceModule { }
