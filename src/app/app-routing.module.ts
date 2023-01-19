import { FormsComponent } from './components/forms/forms.component';
import { TowWayBindingComponent } from './components/tow-way-binding/tow-way-binding.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TelaEdtarComponent } from './components/tela-edtar/tela-edtar.component';



const routes:Routes= [
  {path:'',component:ListRenderComponent},
  {path:'list',component:ListRenderComponent},
  {path: 'updade/:id', component:ItemDetailComponent},
  {path:'eventos',component:EventosComponent},
  {path:'if',component:IfRenderComponent},
  {path:'forms',component:FormsComponent},
  {path:'tela-edtar', component:TelaEdtarComponent},
  {path:"editar/:id",component:FormsComponent}

]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
