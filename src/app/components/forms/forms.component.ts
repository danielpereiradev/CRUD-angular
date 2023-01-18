import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, RadioControlValueAccessor, Validator, Validators} from '@angular/forms';
import { config, from } from 'rxjs';
import { DeclareVarStmt } from '@angular/compiler';
import { Devs } from '../Devs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form!: FormGroup;
devs:Devs[]=[]

  constructor(private formBuilder: FormBuilder, private service: ListService,private toast:ToastrService,) {


    this.form = this.formBuilder.group({
      name: [null],
      age: [null],
      email:[null]
    })

  }

  ngOnInit(): void {
    this.form.value
    }

  //   this.form = new FormGroup({
  //     name:new FormControl("",[ Validators.required]),
  //     age:new FormControl("", Validators.required),

  //   });
  // }

  // get name(){
  //   return this.form.get('name')!
  // }


  // get age(){
  //   return this.form.get('age')!
  // }
  onSubmit() {
    console.log(this.form.status )
    if(this.form.status != "VALID"){
      this.showErro()
    }else{
      this.showSuccess()
    }

    this.service.save(this.form.value)


  }
  showSuccess(){
    this.toast.success("Salvo !!!!")
  }


  showErro(){
    this.toast.error("Ocorreu um erro")
  }





}
