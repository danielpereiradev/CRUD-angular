import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { Devs } from '../components/Devs';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, take } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = "/api/developer"
  total?:number


  constructor(private http: HttpClient, private toast: ToastrService) { }

  remove(id: number) {
    return this.http.delete<Devs>(`${this.apiURL}/${id}`)
  }
  getAll(): Observable<Devs[]> {
    return this.http.get<Devs[]>(this.apiURL)

  }

  findDev(): Observable<Devs[]> {
    return this.http.get<Devs[]>(`${this.apiURL}/find.json?name`)

  }

  getItem(id: number): Observable<Devs> {
    return this.http.get<Devs>(`${this.apiURL}/${id}`)

  }
    create(dev: Partial<Devs>){
      console.log(dev)
      if(dev.id){
        console.log("update")
        return this.update(dev)

      }else{
        console.log("Seved ")
        return this.save(dev)
      }

    }

 private  save(dev: Partial<Devs>) {
    return this.http.post<Devs>(this.apiURL, dev)
  }

 private  update(dev: Partial<Devs>) {
    return this.http.put(`${this.apiURL}/atulizar/devs/${dev.id}`, dev)
  }

  listDevs(dev: Devs) {
    return this.http.get<Devs[]>(`${this.apiURL}/find.json?name=${dev.name}`)


  }



}
