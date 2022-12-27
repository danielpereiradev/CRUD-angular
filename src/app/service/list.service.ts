import { Injectable } from '@angular/core';
import { Devs } from '../components/Devs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

   remove(devs:Devs[], dev:Devs){
     return devs.filter((a) =>  dev.nome !== a.nome)
   }

}
