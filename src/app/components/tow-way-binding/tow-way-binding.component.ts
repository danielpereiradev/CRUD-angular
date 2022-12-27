import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tow-way-binding',
  templateUrl: './tow-way-binding.component.html',
  styleUrls: ['./tow-way-binding.component.css']
})
export class TowWayBindingComponent implements OnInit {
  ngOnInit(): void {

  }
name:string = ""
senha:string = "785k9wv"


// validacaoDeSenha(senha:string){
//   if(senha !=="785k9wv"){
//     console.log("Sucesso :)")
//   }else{
//     console.log("Senha Incorreta :( ")
//   }

// }
}
