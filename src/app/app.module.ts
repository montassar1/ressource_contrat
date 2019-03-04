import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContratComponent } from './contrat/contrat.component';
import { RessourceComponent } from './ressource/ressource.component';
import { HttpClientModule } from '@angular/common/http';
import { ContratService } from './contrat.service';
import { FormsModule } from '@angular/forms';
import { RessourceService } from './ressource.service';
//import { NouvcontratComponent } from './nouvcontrat/nouvcontrat.component';


const routes: Routes = [
  {
    path: '',
    component: RessourceComponent
},
  {
      path: 'ressource',
      component: RessourceComponent
  },
  {
    path: 'contrat',
    component: ContratComponent
},



];

@NgModule({
  declarations: [
    AppComponent,
    ContratComponent,
    RessourceComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [ContratService,RessourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
