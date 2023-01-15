import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {



  @Input()dev:Devs[]=[]
  @Output() update= new EventEmitter(false)


constructor(private listService:ListService){
  this.getDevs()
}

  ngOnInit(): void {

  }

devs: Devs[] = []

detalis:string = ""

showId(dev:Devs){
 this.detalis=` O Id de ${dev.name} é ${dev.id}`
}


deleteDev(dev:Devs){
  this.devs  =this.devs.filter((a) =>  dev.name !== a.name)
  this.listService.remove(dev.id).subscribe()
}
getDevs():void{
  this.listService.getAll().subscribe((devs)=> (this.devs = devs))

}
updateDev(dev:Devs){
  console.log("Update!!!!!!!!!!!")
  this.update.emit(dev)
}
filtroDev(dev:Devs){
  this.devs = this.devs.filter( (n) => dev.name  !==  n.name).filter((a) => dev.age !== a.age )
  this.listService.listDevs(dev).subscribe

}





}
