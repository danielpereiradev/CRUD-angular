import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(){}
ngOnInit(): void {

}
  userName = "Joaquim"
  email = "jaaqim123@gmail.com"
  title = 'crud-angular';


  car = {
    modelo:"Gol",
    placa:"ASN1234"
  }

}
