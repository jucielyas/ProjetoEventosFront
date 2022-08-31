import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEventosComponent } from './lista-eventos.component';
import { RouterModule } from '@angular/router';
import { ListaEventosRoutingModule } from './lista-eventos-routing.module';



@NgModule({
  declarations: [ListaEventosComponent],
  imports: [
    CommonModule, RouterModule, ListaEventosRoutingModule
  ],
  exports:[ListaEventosComponent]
})
export class ListaEventosModule { }
