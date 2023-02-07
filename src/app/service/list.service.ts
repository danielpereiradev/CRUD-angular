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
      return this.update(dev)

    } else {
      console.log("Seved ")
      return this.save(dev)
    }

  }
// Métodos Private

  private save(dev: Partial<Devs>) {
    return this.http.post<Devs>(this.apiURL, dev)
  }

  private update(dev: Partial<Devs>) {
    return this.http.put(`${this.apiURL}/atulizar/devs/${dev.id}`, dev)
  }

  listDevs(dev: Devs) {
    return this.http.get<Devs[]>(`${this.apiURL}/find.json?name=${dev.name}`)

  }

  getPageDev(page:number, size:number):Observable<any>{
    return this.http.get(`${this.apiURL}/page.json?page=${page}&size=${size}`)


  }

}




