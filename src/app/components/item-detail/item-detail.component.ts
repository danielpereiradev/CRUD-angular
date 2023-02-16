import { ListService } from './../../service/list.service';
import { Component,  OnInit } from '@angular/core';
import { Devs } from '../Devs';
import { ActivatedRoute } from '@angular/router';
// import { ListService } from 'src/app/service/list.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  implements  OnInit {

dev?:Devs


  constructor(private listService:ListService,private router:ActivatedRoute){
    this.getDevs()
  }

  ngOnInit(): void {

  }

public getDevs():void{
    const id  = Number(this.router.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((dev)=>
    (this.dev=dev
      ));
  }

}
