import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/lista-eventos/lista-eventos.component').then((m) => m.ListaEventosComponent),
    canLoad: [],
  },
  {
    path: 'novo-evento',
    loadChildren: () => import('./components/cadastro-evento/cadastro-evento.module').then((m) => m.CadastroEventoModule),
    canLoad:[]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
