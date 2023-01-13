import { Routes } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { config } from 'rxjs';
import { DeclareVarStmt } from '@angular/compiler';
import { Devs } from '../Devs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private service: ListService,) {


    this.form = this.formBuilder.group({
      name: [null],
      age: [null]
    })



  }

  ngOnInit(): void {
    this.form.value
  }
  onSubmit() {
    console.log("this.form.value",this.form.value)

    this.service.save(this.form.value)


  }

  onCancel() {





  }


}
