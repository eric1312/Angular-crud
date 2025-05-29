import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormularioComponent } from './usuario-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsuarioFormularioComponent],
  exports: [UsuarioFormularioComponent]
})
export class UsuarioFormularioModule {}
