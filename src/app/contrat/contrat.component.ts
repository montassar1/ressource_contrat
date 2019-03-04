
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';
import { ContratService } from '../contrat.service';

import { Contrat } from '../model/contrat';


@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',

  styleUrls: ['./contrat.component.css'],

})
export class ContratComponent implements OnInit {
  motCle: string = "";
  cont: any;
  public listContrats: Contrat[];
  contrat: Contrat = new Contrat();
  showFrom = false;
  showupdate = false;
  showsave = false;
  contra_mission = 'nom_mission';
  contra_type = 'type de la mission';
  constructor(private contratserv: ContratService) { }

  ngOnInit() {

    this.contratserv.findContrats().subscribe((data) => {
      console.log(data);
      this.listContrats = data;
    })


  }


  delete(cont: Contrat) {

    this.contratserv.deleteContrat(cont.id);
    // this.listContrats.splice(this.listContrats.indexOf(cont));
    this.contratserv.findContrats().subscribe((data) => {
    }, error => console.log(error),
      () => {
        this.contratserv.findContrats().subscribe((data) => {
          this.listContrats = data;
        });
      }


    )



    /*
    this.contratserv.findContacts().subscribe((data)=>{
      console.log(data);
    this.listContrats=data;})*/


  }

  save() {



    this.contrat.mission = this.contra_mission,
      this.contrat.type = this.contra_type;

    this.contratserv.addContrat(this.contrat)
      .subscribe(data => console.log(data), error => console.log(error),
        () => {
          this.contratserv.findContrats().subscribe((data) => {
            this.listContrats = data;
          });
        }
      );
    // this.listContrats.push(this.contrat);


  }
  open() {
    if (this.showupdate === true) {
      this.showupdate = !this.showupdate;
    }
    if (this.showsave === false) {
      this.showsave = !this.showsave;
    }

    this.showFrom = !this.showFrom;


    this.contra_mission = 'nom_mission';
    this.contra_type = 'type de la mission';

  }

  update(c) {



    //this.contrat.id=c.id;
    this.contrat.type = this.contra_type;
    this.contrat.mission = this.contra_mission;
    this.contratserv.updateContrat(this.contrat).subscribe(
      (data) => { },
      error => console.log(error),
      () => {
        this.contratserv.findContrats().subscribe((data) => {
          this.listContrats = data;
        });
      }
    );
  };

  taggelForm(c) {

    if (this.showupdate === false) {
      this.showupdate = !this.showupdate;
    }


    //this.showFrom = !this.showFrom;

    //this.showupdate = !this.showupdate;
    
        if (this.contrat.id === null) {
          this.showFrom = !this.showFrom;
        }
        else {
    this.contrat.id = c.id;

    this.contra_mission = c.mission;
    this.contra_type = c.type;
    /*
      this.contrat.type=c.type;
      this.contrat.mission=c.mission;
    
      */
    //this.showFrom= !this.showFrom ;
    //this.showupdate= !this.showupdate;
    }
    if (this.showsave === true) {
      this.showsave = !this.showsave;
    }

  }


  chercher() {

    console.log(this.motCle);
    this.doSearch();
  }
  doSearch() {
    console.log(this.motCle);

    this.contratserv.getContratByName(this.motCle)
      .subscribe((data: Contrat[]) => {
        this.listContrats = data;
      }, err => {
        console.log(err);
      });
  }
}