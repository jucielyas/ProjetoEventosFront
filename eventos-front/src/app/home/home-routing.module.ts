import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListaEventosComponent } from '../components/lista-eventos/lista-eventos.component';
import { CadastroEventoComponent } from '../components/cadastro-evento/cadastro-evento.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListaEventosComponent,
      },
      {
        path: 'novo-evento',
        component: CadastroEventoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
