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

  constructor(private http: HttpClient, private toast: ToastrService) { }

  remove(id: number) {
    return this.http.delete<Devs>(`${this.apiURL}/${id}`)
  }
  getAll(): Observable<Devs[]> {
    return this.http.get<Devs[]>(this.apiURL)

  }

  getItem(id: number): Observable<Devs> {
    return this.http.get<Devs>(`${this.apiURL}/${id}`)

  }

  save(dev: Devs) {
    return this.http.post<Devs>(this.apiURL, dev)
  }

  update(dev: Devs) {
    return this.http.put<Devs>(`${this.apiURL}/${dev.id}`, dev)


  }
  listDevs(dev: Devs) {

    return this.http.get<Devs[]>(`${this.apiURL}/${dev.name}/${dev.age}`)

  }



}
