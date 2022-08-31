import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroEventoModule } from './components/cadastro-evento/cadastro-evento.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { ListaEventosModule } from './components/lista-eventos/lista-eventos.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    CadastroEventoModule,
    CabecalhoModule,
    BrowserModule,
    ListaEventosModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
