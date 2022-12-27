import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

show:boolean = false;

parabens:boolean= false;

 showMenssege():void {
  this.show = !this.show
 }

 showImage():void {
this.parabens = !this.parabens

 }


  constructor(){}

ngOnInit(): void {

}

}
