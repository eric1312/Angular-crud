import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListadoComponent } from './usuario-listado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuarioListadoComponent
  ],
  exports: [UsuarioListadoComponent]
})
export class UsuarioListadoModule {}
