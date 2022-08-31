import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento.component';

const routes: Routes = [
  {
    path: 'novo-evento',
    component: CadastroEventoComponent,
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
export class CadastroEventoRoutingModule { }
