import { ToastrService } from 'ngx-toastr';
import { ListService } from './../../service/list.service';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute } from '@angular/router';
import { Devs } from '../Devs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tela-edtar',
  templateUrl: './tela-edtar.component.html',
  styleUrls: ['./tela-edtar.component.css']
})
export class TelaEdtarComponent implements OnInit{

form!:FormGroup


constructor(
  private formBuilder: FormBuilder,
  private service: ListService,
  private toast: ToastrService,
  private route: ActivatedRoute,
  private location: Location,
  ) {

  // this.form = this.formBuilder.group({
  //   name: [null],
  //   // age: [null],
  //   email: [null],
  //   id: [null]
  // })

}



ngOnInit(): void {

  this.route.params.subscribe(
    (params: any) => {
      const id = params['id']
      const dev$ = this.service.getItem(id)
      dev$.subscribe(dev => {
        this.updateForms(dev)
      })
    })
    const dev = this.route.snapshot.data['dev']

    this.form = this.formBuilder.group({
      name: [null],
      // age: [null],
      email: [null],
      id: [null]
    })


  this.form.value
}

  updateDev(){
  if(this.form.status != "VALID"){
    this.showErro()
  }else{
    this.showSuccess()
  }

  this.service.update(this.form.value.id)

}


showSuccess(){
  this.toast.success("Salvo")
}
showErro(){
  this.toast.error("Ocorreu um erro")
}
updateForms(dev:Devs) {
  this.form.patchValue({
    name: dev.name,
    email: dev.email
  })

}


}
