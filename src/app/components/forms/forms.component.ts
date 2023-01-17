import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { config } from 'rxjs';
import { DeclareVarStmt } from '@angular/compiler';
import { Devs } from '../Devs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
devs:Devs[]=[]

  constructor(private formBuilder: FormBuilder, private service: ListService,private toast:ToastrService) {


    this.form = this.formBuilder.group({
      name: [null],
      age: [null]
    })



  }

  ngOnInit(): void {
    this.form.value

  }
  onSubmit() {
    // if(this.form.clearValidators){
    //   this.showErro()
    // }else{
    //   this.showSuccess
    // }

    this.service.save(this.form.value)


  }
  showSuccess(){
    this.toast.success("Salvo !!!!")
  }

  onCancel() {
    console.log("Voltar !!!")

  }
  showErro(){
    this.toast.error("Ocorreu um erro")
  }





}
