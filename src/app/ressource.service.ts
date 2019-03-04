import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrat } from './model/contrat';
import { Observable } from 'rxjs/Observable';
import { Ressource } from './model/ressource';

@Injectable()
export class RessourceService {
  headers = new HttpHeaders()
  .append('Access-Control-Allow-Origin', '*')
  .append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
  .append('Access-Control-Allow-Headers','*')
  constructor(public http: HttpClient) { }
  getRessource(): Observable<Ressource[]> {
  return this.http.get<Ressource[]>("http://localhost:8080/ressources");
  }

  getRessourceByName(name:string){
    return this.http.get("http://localhost:8080/chercherContacts?mission="+name);
  } 
  getContratDispo(){
    return this.http.get("http://localhost:8080/contratsdesp")
  ;
  } 

  deleteRessource(num:number)
  {
return this.http.delete('http://localhost:8080/ressources/del/'+num);

  }

  addRessource(c:Ressource):Observable<Ressource>
  {

    return this.http.post<Ressource>('http://localhost:8080/ressources/add/',c);
  }

  
  
  updateRessource(R:Ressource): Observable<Ressource>{
    return this.http.put<Ressource>('http://localhost:8080/ressources/update/' + R.id,R);
    }
    }
