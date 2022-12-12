import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoComponent } from './endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EnderecoComponent],
  imports: [
    CommonModule,RouterModule, FormsModule,
    ReactiveFormsModule
  ],
  exports:[EnderecoComponent]
})
export class EnderecoModule { }
