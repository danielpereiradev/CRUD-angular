import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent  implements OnInit {

@Input()
 name: string = '';

@Input()
email:string =  '';


age:number = 0;
cpf:string  = '';

@Input() car!: {modelo:string, placa:string}



  constructor(){}
  ngOnInit(): void {

  }


}
