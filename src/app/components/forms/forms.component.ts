import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { config } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements  OnInit {

form:FormGroup;


  constructor(private formBuilder:FormBuilder){

    this.form=this.formBuilder.group({
      name:[null],
      age:[null]

    })



}

  ngOnInit(): void {

}


}
