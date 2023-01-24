import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, tap, filter, distinctUntilChanged, debounceTime,switchMap } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devs } from '../Devs';
import { ListService } from 'src/app/service/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  form!: FormGroup

  searhText: any = "";
  private apiURL = "/api/developer"
   fields:string = "name,age,email"





  @Input() dev: Devs[] = []
  @Output() update = new EventEmitter(false)


  queryField = new FormControl();
  result$?:Observable<any>


  constructor(
    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http:HttpClient
    ) {

    this.getDevs()
  }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   name: new FormControl(null),
    //   age: new FormControl(null),
    //   email: new FormControl(null)

    // })

      this.queryField.valueChanges

    this.result$ = this.queryField.valueChanges.pipe(
    map((value:any)=> value.trim()),
    filter((value:any)=> value.length > 1),
    debounceTime(200),
    distinctUntilChanged(),
    //tap((value:any) => console.log(value)),
    switchMap(value => this.http.get(this.apiURL,{
      params:{
        search: value,
        fields:this.fields
      }
    })),
    map((res:any)=>( res= this.result$))
  );


  }


  devs: Devs[] = []

  detalis: string = ""

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

    // const target =e.target as  HTMLInpform
    //  return d.name.toLowerCase().includes(value)
    // })
    // this.devs = this.devs.filter( (n) => dev.name  !==  n.name).filter((a) => dev.age !== a.age )

  }

    onSearch(){
    console.log(this.queryField.value)




    let value = this.queryField.value



    if(value &&  (value =value.trim()) !== "" ){
      value = value.trim( )
    const params_ ={
      search:value,
    }

    let params__ = new HttpParams()
  params__ = params__.set('search', value)
  // params__ = params__.set('fields', fields)


    }

    this.result$ = this.listService.listDevs(this.queryField.value + value)

  }
}






