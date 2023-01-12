import { Injectable } from '@angular/core';
import { Devs } from '../components/Devs';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL= "/api/developer"

  constructor(private http: HttpClient) { }

   remove(id:number){
    return this.http.delete<Devs>(`${this.apiURL}/${id}`)
    //  return devs.filter((a) =>  dev.nome !== a.nome)
   }
   getAll():Observable<Devs[]>{
     return this.http.get<Devs[]>(this.apiURL)

   }

   getItem(id:number):Observable<Devs>{
    return this.http.get<Devs>(`${this.apiURL}${id}`)

   }

   save(dev:Devs){
    return  this.http.post<Devs>(this.apiURL,dev).subscribe(result=>console.log(result))
  }

}
