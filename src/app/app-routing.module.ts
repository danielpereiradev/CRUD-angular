import { ListRenderComponent } from './components/list-render/list-render.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FistComponentComponent } from './components/fist-component/fist-component.component';

const routes: Routes = [];


const router:Routes= [
  {path:'',component:FistComponentComponent},
  {path: '/list', component:ListRenderComponent}
]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
