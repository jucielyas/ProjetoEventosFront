import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEventoComponent } from './cadastro-evento.component';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { CadastroEventoRoutingModule } from './cadastro-evento-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroEventoComponent],
  imports: [
    CommonModule,RouterModule, CadastroEventoRoutingModule, FormsModule
  ],
  exports:[CadastroEventoComponent]
})
export class CadastroEventoModule { }
