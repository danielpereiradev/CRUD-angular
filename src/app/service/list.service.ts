import { Page } from './../components/Page';
import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { Devs } from '../components/Devs';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, take, map, of } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { ParamMap } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = "/api/developer"
  total?: number


  constructor(private http: HttpClient, private toast: ToastrService) { }


// Métodos Public

  public remove(id: number) {
    return this.http.delete<Devs>(`${this.apiURL}/${id}`)
  }
  public getAll(): Observable<Devs[]> {
    return this.http.get<Devs[]>(this.apiURL)

  }

  public findDev(): Observable<Devs[]> {
    return this.http.get<Devs[]>(`${this.apiURL}/find.json?name`)

  }

  public getItem(id: number): Observable<Devs> {
    return this.http.get<Devs>(`${this.apiURL}/${id}`)

  }
  public create(dev: Partial<Devs>) {
    console.log(dev)
    if (dev.id) {
      console.log("update")
      return this._update(dev)

    } else {
      console.log("Seved ")
      return this._save(dev)
    }

  }
  public getPageDev(page:number, size:number):Observable<any>{
    return this.http.get(`${this.apiURL}/page.json?page=${page}&size=${size}`)

  }

  public findAge(dev:Devs){
    return this.http.get<Devs[]>(`${this.apiURL}/get-age.json?age=${dev.age}`)
  }
  public listDevs(dev: Devs) {
    return this.http.get<Devs[]>(`${this.apiURL}/find.json?name=${dev.name}`)

  }
  public filtroDinamico(dev:Devs){

  }

// Métodos Private

  private _save(dev: Partial<Devs>) {
    return this.http.post<Devs>(this.apiURL, dev)
  }

  private _update(dev: Partial<Devs>) {
    return this.http.put(`${this.apiURL}/atulizar/devs/${dev.id}`, dev)
  }

}




