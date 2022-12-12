import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/models/endereco';
import { Evento } from '../lista-eventos/evento';
import { EventosService } from '../lista-eventos/eventos.service';
import { EventoCategoria } from './evento-categoria';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  novoEventoForm!: FormGroup;
  novaCategoriaForm!: FormGroup;
  novoEnderecoForm!: FormGroup;

  categorias$!: Observable<Array<EventoCategoria>>;

  constructor(private router: Router, private formBuilder: FormBuilder, private eventosService: EventosService,) { }

  ngOnInit(): void {
this.listarCategorias();
    
    this.novoEventoForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        data: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
      },
      {
        validators: [],
      }
    );

    this.novoEnderecoForm = this.formBuilder.group(
      {
        rua:['',[Validators.required]],
        numero:['',[Validators.required]],
        bairro:['',[Validators.required]],
        cidade:['',[Validators.required]],
        estado:['',[Validators.required]]
      }
    )

    this.novaCategoriaForm = this.formBuilder.group({
      descricao: ['',[]],
      id: [1,[]]
    });

  }

  cadastrarEvento() {
    if (this.novoEventoForm.valid) {
      const novoEvento = this.novoEventoForm.getRawValue() as Evento;
      const novoEndereco = this.novoEnderecoForm.getRawValue() as Endereco;

      novoEvento.endereco = novoEndereco;

      console.log(JSON.stringify(novoEvento))

      this.eventosService.createEvento(novoEvento).subscribe(
        () => {
          console.log(novoEvento.descricao)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  cadastrarCategoria() {
    if (this.novaCategoriaForm.valid) {
      const novaCategoria = this.novaCategoriaForm.getRawValue() as EventoCategoria;

      console.log(JSON.stringify(novaCategoria))

      this.eventosService.createEventoCategoria(novaCategoria).subscribe(
        () => {
          console.log(novaCategoria.descricao)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  
  cadastrarEndereco() {
    if (this.novoEnderecoForm.valid) {
      const novoEndereco = this.novoEnderecoForm.getRawValue() as Endereco;

      console.log(JSON.stringify(novoEndereco))

      this.eventosService.createEventoEndereco(novoEndereco).subscribe(
        () => {
          console.log(JSON.stringify(novoEndereco))
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  listarCategorias(){
    this.categorias$ = this.eventosService.getListEventoCategorias();
  }

}
