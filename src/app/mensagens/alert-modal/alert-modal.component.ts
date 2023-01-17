import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
   @Input() type =" success"
   @Input() mensagem?:string


  constructor(){}

  ngOnInit(): void {

  }



}
