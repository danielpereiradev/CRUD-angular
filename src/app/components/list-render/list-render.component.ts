import { Page } from './../Page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, tap, filter, distinctUntilChanged, debounceTime, switchMap, switchScan, throttleTime, config } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { __param } from 'tslib';
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
  paginaAtual=0;
  pages!: Page;

  total?: number
  size=10;

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
    // this.pageDevs(this.paginaAtual,this.size)
    this.proximo()
    this.voltar()


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


  pageDevs(page: number, size: number) {

    this.listService.getPageDev(page, size).subscribe(res => {
      this.devs = res.content
      this.devs = this.pages.content



      // if (this.pages.totalPages != 0) {
      //   this.paginaAtual+1
      // } else if (this.pages.totalPages=3) {
      //   this.paginaAtual-1
      //   this.location.back()
      // }
    })




  }



  voltar() {
    this.pageDevs(this.paginaAtual, this.size)


    this.paginaAtual--


  }

  proximo() {
   this.pageDevs(this.paginaAtual, this.size)
    this.paginaAtual++

  }


  getAllDevs() {
    this.listService.getAll().subscribe(res => {
      this.devs = res
    })
  }

}









