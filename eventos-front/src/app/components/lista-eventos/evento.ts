import { Endereco } from "src/app/models/endereco";
import { EventoCategoria } from "../cadastro-evento/evento-categoria";

export interface Evento {
    id:number;
    idEndereco:number;
    nome:string;
    data:Date;
    descricao:string;
    categoria:EventoCategoria;
    endereco: Endereco
}
