import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioFormularioModule } from "./features/usuario-formulario/usuario-formulario.component.spec";
import { UsuarioFormularioComponent } from "./features/usuario-formulario/usuario-formulario.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuarioFormularioModule, UsuarioFormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-angular-ssr';
}
