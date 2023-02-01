import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, tap, filter, distinctUntilChanged, debounceTime, switchMap, switchScan, throttleTime, config } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { __param } from 'tslib';
import { Page } from '../Page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  form!: FormGroup


  private apiURL = "/api/developer"
  fields: string = "name,age,email"
  searchText: string = ""


  queryField = new FormControl();



  @Input() dev: Devs[] = []
  @Output() update = new EventEmitter(false)



  result$!: Observable<any>;
  result!: Observable<Devs[]>
  paginaAtual = 1;
  page!: Page;

  total?: number
  size!: number;
  pages!:number


  constructor(
    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private location:Location


  ) {

  }

  ngOnInit() {

   this.pageDevs(0,5)
   console.log(this.result)


    this.result = this.queryField.valueChanges.pipe(

      map((value: string) => value.trim()),
      filter((value: string) => value.length > 1),
      debounceTime(200),
      tap((value: any) => console.log(value)),
      switchMap(value => this.http.get(`${this.apiURL}/find.json?`, {
        params: {
          name: value,

        }
      }))
      ,
      // tap((res:any) => res.result),
      map((res: any) => res.result)

    )
  }


  devs: Devs[] = []

  detalis = ""

  showId(dev: Devs) {
    this.detalis = ` O Id de ${dev.name} é ${dev.id}`
  }


  deleteDev(dev: Devs) {
    this.devs = this.devs.filter((a) => dev.name !== a.name)
    this.listService.remove(dev.id).subscribe()
  }
  getDevs(): void {
    this.listService.getAll().subscribe((devs) => (this.devs = devs))

  }


  updateDev(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  filtroDev(): void {
    this.listService.listDevs(this.form.value);

  }

  onSearch(): void {

    let value = this.queryField


    // this.result$ = this.http.get(`${this.apiURL}/find.json?name=${value}`, this.queryField.value + value)
    this.result
  }


  pageDevs(page:number, size:number){

    this.listService.getPageDev(page, size).subscribe(res => {
      this.devs = res.content
      this.devs = this.page.content


    })
  }
  chagePage(event: any){
    this.pageDevs(event.page,event.size)

  }



  voltar(){
    this.location.back()
  }

  proximo(){
    this.location.getState()
  }


  getAllDevs( ){
    this.listService.getAll().subscribe(res=> {
      this.devs = res
    })
  }

}









