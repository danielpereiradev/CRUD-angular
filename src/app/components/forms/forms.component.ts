import { HttpClient } from '@angular/common/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, RadioControlValueAccessor, Validator, Validators } from '@angular/forms';
import { config, from } from 'rxjs';
import { DeclareVarStmt } from '@angular/compiler';
import { Devs } from '../Devs';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form!: FormGroup;
  // devs:Devs[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private service: ListService,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private location: Location,
  ) {

  }

  ngOnInit(): void {
    this._createFomsCadastro();
    this._routeUpdate();

    this.form.value
  }


  // Métodos publicos

  public onSubmit():void {
    console.log(this.form.value)
      this.service.create(this.form.value).subscribe( result => {
        this._showSuccess(), erro => this._showErro( )
      });

    if(this.form.status != "VALID"){
      this._showErro()
    }
    this.location.back();
  }

  public onCancel():void {
    this.form.reset();
    this.location.back();
  }



  //Métodos Privados


  private _showSuccess():void {
    this.toast.success("Salvo !!!!")
  }

  private _showErro():void {
    this.toast.error("Error ");

  }

  private _updateForms(dev: Devs):void {
    this.form.patchValue({
      id: dev.id,
      name: dev.name,
      email: dev.email,
      age:dev.age
    });
  }

  private _createFomsCadastro():void{
    this.form = this.formBuilder.group({
      id: new FormControl(),
      name: [null],
      age: [null],
      email: [null],
    });
  }
  private _routeUpdate():void{
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        const dev$ = this.service.getItem(id)
        dev$.subscribe(dev => {
          this._updateForms(dev)
        })
      });
  }

}
