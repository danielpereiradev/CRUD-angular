import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TowWayBindingComponent } from './components/tow-way-binding/tow-way-binding.component';
import { FormsComponent } from './components/forms/forms.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FistComponentComponent,
    DirectivesComponent,
    ParentDataComponent,
    IfRenderComponent,
    EventosComponent,
    ListRenderComponent,
    PipesComponent,
    TowWayBindingComponent,
    FormsComponent,
    PaginaPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
