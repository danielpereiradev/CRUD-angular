import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

show:boolean = false;

parabens:boolean= false;



public showMenssege():void {
  this.show = !this.show
 }

public showImage():void {
  this.parabens = !this.parabens

 }


constructor(){}

ngOnInit(): void {

}

}
