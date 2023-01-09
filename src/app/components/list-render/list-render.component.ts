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
  this.getDevs()
}

  ngOnInit(): void {

  }

devs: Devs[] = []

detalis:string = ""

showId(dev:Devs){
 this.detalis=` O Id de ${dev.nome} é ${dev.id}`
}


deleteDev(dev:Devs){
  this.devs  =this.devs.filter((a) =>  dev.nome !== a.nome)
  this.listService.remove(dev.id).subscribe()
}
getDevs():void{
  this.listService.getAll().subscribe((devs)=> (this.devs = devs))

}





}
