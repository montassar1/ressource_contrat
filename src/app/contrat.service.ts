import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contrat } from './model/contrat';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContratService {
  constructor(public http: HttpClient) { }
 /* getContrats(){
  return this.http.get("http://localhost:8080/contrats")
  .pipe(map(data => data.json()));
  }

  getContactsByName(name:string){
    return this.http.get("http://localhost:8080/chercherContacts?name_mission="+name)
    .pipe(map(data => data.json()));
    }
*/
    
    URL = 'http://localhost:8080/contrats';


    
    public findContrats(): Observable<Contrat[]>
    {
    return this.http.get<Contrat[]>(`${this.URL}`);
    }
    
    public deleteContrat(id:number)
    {
    
    return this.http.delete('http://localhost:8080/contrats/delete/' + id).subscribe();
    }
    
    addContrat(c:Contrat): Observable<Contrat> {
    return this.http.post<Contrat>('http://localhost:8080/contrats/save',c);
    }
    
    updateContrat(c:Contrat): Observable<Contrat>{
    return this.http.put<Contrat>('http://localhost:8080/contrats/update/' + c.id,c);
    }

    getContratByName(name:string){
      return this.http.get("http://localhost:8080/chercherContacts?mission="+name)
    ;
    } 

    }



