import { Page } from './../Page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, tap, filter, distinctUntilChanged, debounceTime, switchMap, switchScan, throttleTime, config, Subject, take, VirtualAction, of } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EnvironmentInjector, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';
import { Router, ActivatedRoute,  TitleStrategy } from '@angular/router';
import { parseHostBindings, ThisReceiver } from '@angular/compiler';
import { __param } from 'tslib';
import { NgxPaginationModule } from 'ngx-pagination';
import { Location } from '@angular/common';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  form!: FormGroup
  formAge!:FormGroup


  private apiURL = "/api/developer"
  fields: string = "name,age,email"
  searchText = new FormControl();

 private queryField =new Subject<string>();



  dev: Devs[] = []
  @Output() update = new EventEmitter(false)


  pages:Page;
  paginaAtual= 0;
  withResfresh=false

  total?: number
  size = 5;


  constructor(
    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private location: Location


  ) {

  }

  ngOnInit() {

   this._createFilterNameForm();
   this._filterEventFormName();


   this._pageDevs(this.paginaAtual,this.size);

  //  this._createFilterAgeForm();


  }


  devs:Devs[]=[];
  devList: Devs[]=[];


  // Métodos Publicos -- São Métodos que chamados diretamente no html --

 public deleteDev(dev: Devs):void {
    this.devList = this.devList.filter((a) => dev.name !== a.name)
    this.listService.remove(dev.id).subscribe()

  }

  public getDevs(): void {
    this.listService.getAll().subscribe(
      (devs) => {
        console.log(devs);

        this.devs = devs;
        this.devList = devs;
      });

  }
  public updateDev(id: number):void {
      this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  public voltar():void {
    this._pageDevs(this.paginaAtual, this.size)
    if ( this.paginaAtual != 0) {
      this.paginaAtual --
    }
  }

  public proximo():void {
    this._pageDevs(this.paginaAtual, this.size)

    if (this.paginaAtual != 5) {
      this.paginaAtual++
    }

  }
  public buttonFilter():void{
    this._createFilterNameForm();
    this._filterEventFormName();

  }

// Métodos Privados -- São metodos que não são usados no html --

  private _createFilterNameForm():void{ // Esse método está criando o formulário
    this.form = this.formBuilder.group({
      name:[null],
      age:[null]


    });
  }
  private _filterEventFormName():void{ // Esse método está filtrando os valores
    this.form.get('name').valueChanges.subscribe(res => {

      this._searchDevName(res);
    });

    this.form.get('age').valueChanges.subscribe(res => {

      this._searchDevAge(res);
    })

  }

  private _searchDevName(name?:string, age?:number):void{// Esse método faz a busca por nome
    let list = this.devs?.map(res => res);
    if(name?.trim()){
      this.devList = list?.filter(res => res.name?.trim()?.toLowerCase().includes(name?.trim()?.toLowerCase()));
    }
      this.devList = list?.filter(res => res.name?.trim()?.toLowerCase().includes(name?.trim()?.toLowerCase()));
    }

  private _searchDevAge(age?:string){
      let list = this.devs?.map(res => res);

      this.devList = list?. filter(res => res.age?.toString().includes(age?.trim()));
    }


  private _pageDevs(page: number, size: number) { // Esse método é responsavel de fazer a paginação
    this.listService.getPageDev(page, size).subscribe(res => {
      this.devs = res.content
      this.devList =res.content;

    });



  }

}









