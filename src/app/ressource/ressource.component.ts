import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
//import { ContratService } from '../contrat.service';
import { RessourceService } from '../ressource.service';
import { Ressource } from '../model/ressource';
//import { Contrat } from '../model/contrat';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  public listRessources: Ressource[];
  public listContratDispo: any;
  public selectedContrat;
  Ressource: Ressource = new Ressource();
  id = 11;
  first = "prenom";
  last = "nom";
  registration = "registration"
  date = "1994-09-30"
  showFrom = false;
  showsave = false;
  showupdate = false;
  listSelect;
  ressource: any;
  motCle: string = "";
  constructor(private ressourceService: RessourceService) { }

  ngOnInit() {
    this.listSelect = [];
    this.ressourceService.getRessource()
      .subscribe(data => {
        this.listRessources = data;
      });
    /*this.ressourceService.getContratDispo().subscribe(data => {
      console.log(data);
      this.listContratDispo = data;
      this.listSelect.push(this.listContratDispo);
    });*/
  }
  ////////////////////////////////////


  //////////////////////////////////////////////////////////
  chercher() {
    this.doSearch();
  }
  doSearch() {
    this.ressourceService.getRessourceByName(this.motCle)
      .subscribe((data:Ressource[]) => {
        this.ressource = data;
      }, err => {
        console.log(err);
      });
  }
  addSelect() {

    this.ressourceService.getContratDispo().subscribe(data => {
      console.log(data);
      this.listContratDispo = data;
      this.listSelect.push(this.listContratDispo);
    });

    //this.listSelect.push(this.listContratDispo);
  }
  
  delete(ress:Ressource) {

    this.ressourceService.deleteRessource(ress.id).subscribe(
      (data) => { },
      error => console.log(error),
      () => {
        this.ressourceService.getRessource().subscribe((data) => {
          this.listRessources = data;
        });
      }
    );
  };
    
  
    


  /*
  this.contratserv.findContacts().subscribe((data)=>{
    console.log(data);
  this.listContrats=data;})*/



  save() {

/*

    this.Ressource.first_name = this.first,
      this.Ressource.last_name = this.last;
    this.Ressource.matricule = this.registration;
    this.Ressource.date = this.date;
this.Ressource.contrats=[];*/
    this.ressourceService.addRessource(this.Ressource)
      .subscribe((data:Ressource) => console.log(data), error => console.log(error),
        () => {
          this.ressourceService.getRessource().subscribe((data) => {
            this.listRessources = data;
          });
        }
      );
    // this.listContrats.push(this.contrat);


  }
  open() {

    this.Ressource.first_name = "prenom";
  this.Ressource.last_name = "nom";
  this.Ressource.matricule = "registration"
  this.Ressource.date = "1994/09/30"
    this.showFrom = !this.showFrom;
    //this.showsave = !this.showsave;

    if (this.showupdate === true) {
      this.showupdate = !this.showupdate;
    }
    if (this.showsave === false) {
      this.showsave = !this.showsave;
    }

  }

  update() {


    
    this.ressourceService.updateRessource(this.Ressource).subscribe(
      (data) => { },
      error => console.log(error),
      () => {
        this.ressourceService.getRessource().subscribe((data) => {
          this.listRessources = data;
        });
      }
    );
  };
  
  taggelForm(c) {

    this.Ressource.first_name= c.first_name ;
    this.Ressource.last_name = c.last_name ;
    this.Ressource.matricule = c.matricule;
    this.Ressource.date  =   c.date;




    this.showFrom = !this.showFrom;


    if (this.showupdate === false) {
      this.showupdate = !this.showupdate;
    }
    if (this.showsave === true) {
      this.showsave = !this.showsave;
    }

    

     if (this.Ressource.id === null) {
       this.showFrom = !this.showFrom;
     }
     else {
       //this.id = R.id;
 
    this.first = c.first_name;
    this.last = c.last_name;
    this.registration = c.matricule;
    this.date = c.date;
    /*
      this.contrat.type=c.type;
      this.contrat.mission=c.mission;
    
      */
    //this.showFrom= !this.showFrom ;
    //this.showupdate= !this.showupdate;
    }


  }




}
