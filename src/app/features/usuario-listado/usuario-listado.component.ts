import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import {
  selectPaginatedUsers,
  selectCurrentPage,
  selectTotalPages,
  selectFilterRole,
  selectFilterQuery,
  selectLoading
} from '../../state/users/user.selectors';
import {
  setFilterRole,
  setFilterQuery,
  setPage
} from '../../state/users/user.actions';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.scss'],
  imports: [CommonModule]
})
export class UsuarioListadoComponent {
  usuarios$!: Observable<User[]>;
  paginaActual$!: Observable<number>;
  totalPaginas$!: Observable<number>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {
    this.usuarios$ = this.store.select(selectPaginatedUsers);
    this.paginaActual$ = this.store.select(selectCurrentPage);
    this.totalPaginas$ = this.store.select(selectTotalPages);
    this.loading$ = this.store.select(selectLoading);
  }

  onBuscar(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.store.dispatch(setFilterQuery({ query }));
  }

  onCambiarRol(event: Event): void {
    const rol = (event.target as HTMLSelectElement).value || null;
    this.store.dispatch(setFilterRole({ role: rol }));
  }

  cambiarPagina(nuevaPagina: number): void {
    this.store.dispatch(setPage({ page: nuevaPagina }));
  }
}

