import { ToastrService } from 'ngx-toastr';
import { ListService } from './../../service/list.service';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-edtar',
  templateUrl: './tela-edtar.component.html',
  styleUrls: ['./tela-edtar.component.css']
})
export class TelaEdtarComponent implements OnInit{

form!:FormGroup



constructor(private formBuilder: FormBuilder, private service:ListService, private toast:ToastrService){
 this.form = this.formBuilder.group({
  name:[null],
  email:[null]

 })

}


ngOnInit(): void {
  this.form.value
  }
 updateDev(){
  if(this.form.status != "VALID"){
    this.showErro()
  }else{
    this.showSuccess()
  }

  this.service.update(this.form.value)

}


showSuccess(){
  this.toast.success("Salvo")
}
showErro(){
  this.toast.error("Ocorreu um erro")
}


}
