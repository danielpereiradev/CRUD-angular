import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  form!:FormGroup



  @Input()dev:Devs[]=[]
  @Output() update= new EventEmitter(false)


constructor(private listService:ListService,  private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder){
  this.getDevs()
}

  ngOnInit(): void {
 this.form = this.formBuilder.group({
    id:[null],
    name:[null],
    age:[null],
    email:[null]

  })
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

updateDev(id:number){
  this.router.navigate(['editar',id], {relativeTo:this.route})


}



filtroDev(e:Event):void{
  const target =e.target as  HTMLInputElement
  const value =  target.value

  this.dev=this.devs.filter(d=>{
   return d.name.toLowerCase().includes(value)
  })
  // this.devs = this.devs.filter( (n) => dev.name  !==  n.name).filter((a) => dev.age !== a.age )

}
}






