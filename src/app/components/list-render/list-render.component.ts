import { Component, OnInit } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {


constructor(private listService:ListService){
}

  ngOnInit(): void {

  }

devs: Devs[] = [
{id:1,nome:"Lucas", idade:30},
{id:2,nome: "Fabio", idade:20},
{id:3,nome:"Gabriel", idade:30},
{id:4,nome:"Lucas", idade:30},
]

detalis:string = ""

showId(dev:Devs){
 this.detalis=` O Id de ${dev.nome} é ${dev.id}`
}


deleteDev(dev:Devs){
  console.log("Deletando Deve ")
  this.listService.remove(this.devs,  dev)
}





}
