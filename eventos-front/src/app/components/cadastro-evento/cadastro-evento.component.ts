import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../lista-eventos/eventos.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  novoEventoForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private eventosService: EventosService,) { }

  ngOnInit(): void {

    this.novoEventoForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.name]],
        data: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
      }
    );

  }

}
