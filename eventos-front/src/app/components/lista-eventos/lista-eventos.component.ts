import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import { EventosService } from './eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  eventos$!: Observable<Array<Evento>>;

  constructor(
    private eventosService: EventosService,
  ) { }

  ngOnInit(): void {

    this.eventos$ = this.eventosService.getListEventos();

  }

}
