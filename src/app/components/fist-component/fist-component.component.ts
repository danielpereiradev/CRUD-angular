import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  templateUrl: './fist-component.component.html',
  styleUrls: ['./fist-component.component.css']
})
export class FistComponentComponent implements OnInit {
  nome: string = "Mateus";
  age: number = 30;
  job = "Progamador";

  hobbies = ["Correr","Jogar","Cantar"]

  car = {
    modelo: "Gol",
    cor: "Preto",
    placa:"JKL0987"
  }




  constructor() { }
  ngOnInit(): void {



  }

}


