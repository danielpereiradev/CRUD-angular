import { Injectable } from '@angular/core';
import { Devs } from '../components/Devs';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUlr= "http://localhost:3000/devs"

  constructor(private http: HttpClient) { }

   remove(id:number){
    return this.http.delete<Devs>(`${this.apiUlr}/${id}`)
    //  return devs.filter((a) =>  dev.nome !== a.nome)
   }
   getAll():Observable<Devs[]>{
     return this.http.get<Devs[]>(this.apiUlr)

   }

   getItem(id:number):Observable<Devs>{
    return this.http.get<Devs>(`${this.apiUlr}${id}`)

   }

}
