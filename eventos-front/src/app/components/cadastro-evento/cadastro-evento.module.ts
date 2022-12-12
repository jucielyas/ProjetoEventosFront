import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEventoComponent } from './cadastro-evento.component';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { CadastroEventoRoutingModule } from './cadastro-evento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoComponent } from '../endereco/endereco.component';
import { EnderecoModule } from '../endereco/endereco.module';



@NgModule({
  declarations: [CadastroEventoComponent],
  imports: [
    CommonModule,RouterModule, CadastroEventoRoutingModule, FormsModule,
    ReactiveFormsModule, EnderecoModule
  ],
  exports:[CadastroEventoComponent]
})
export class CadastroEventoModule { }
