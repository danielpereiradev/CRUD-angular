import { ListService } from 'src/app/service/list.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-dev',
  templateUrl: './busca-dev.component.html',
  styleUrls: ['./busca-dev.component.css']
})
export class BuscaDevComponent implements  OnInit{





  constructor( private service:ListService){}

  ngOnInit(): void {

  }

  // filtroDev(e:Event,dev:Devs):void{

  //   const target =e.target as  HTMLInputElement
  //   const value =  target.value

  //   this.dev=this.devs.filter(d=>{
  //    return d.name.toLowerCase().includes(value)
  //   })
  //   // this.devs = this.devs.filter( (n) => dev.name  !==  n.name).filter((a) => dev.age !== a.age )
  //   // this.listService.listDevs(dev).subscribe

  // }

}
