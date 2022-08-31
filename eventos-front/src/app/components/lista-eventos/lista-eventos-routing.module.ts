import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaEventosComponent,
    children: [
      // {
      //   path: '',
      //   component: ListaEventosComponent,
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEventosRoutingModule { }
