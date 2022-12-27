import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    FistComponentComponent,
    DirectivesComponent,
    ParentDataComponent,
    IfRenderComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
