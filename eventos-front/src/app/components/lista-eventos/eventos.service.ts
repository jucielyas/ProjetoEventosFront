import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './evento';
import { EventoCategoria } from '../cadastro-evento/evento-categoria';
import { Endereco } from 'src/app/models/endereco';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getListEventos(): Observable<Array<Evento>> {
    return this.http.get<Array<Evento>>(`${API}/eventos`);
  }

  createEvento(evento: Evento): Observable<any> {
    return this.http.post(`${API}/eventos`,evento);
  }

  getListEventoCategorias(): Observable<Array<EventoCategoria>> {
    return this.http.get<Array<EventoCategoria>>(`${API}/categorias`);
  }

  createEventoCategoria(categoria: EventoCategoria): Observable<any> {
    return this.http.post(`${API}/categorias`,categoria);
  }

  createEventoEndereco(endereco: Endereco): Observable<any> {
    return this.http.post(`${API}/endereco`,endereco);
  }


}
