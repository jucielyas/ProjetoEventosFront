import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './evento';

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


}
