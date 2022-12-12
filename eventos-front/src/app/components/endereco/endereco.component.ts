import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco!: Endereco;
  novoEnderecoForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.novoEnderecoForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        data: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
      },
      {
        validators: [],
      }
    );

  }

}
