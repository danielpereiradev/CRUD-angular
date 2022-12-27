import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {





devs = [
{nome:"Lucas", idade:30},
{nome: "Fabio", idade:20},
{nome:"Gabriel", idade:30},
{nome:"Lucas", idade:30},

]


constructor(){}

  ngOnInit(): void {

  }

}
