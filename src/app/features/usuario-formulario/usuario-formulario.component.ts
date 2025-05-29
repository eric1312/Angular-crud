import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser, updateUser } from '../../state/users/user.actions';
import { User } from '../../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class UsuarioFormularioComponent implements OnInit {
  @Input() userToEdit: User | null = null; // si es null, es creación

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [this.userToEdit?.id || null],
      nombre: [this.userToEdit?.nombre || '', [Validators.required, Validators.minLength(3)]],
      apellido: [this.userToEdit?.apellido || '', [Validators.required, Validators.minLength(3)]],
      email: [this.userToEdit?.email || '', [Validators.required, Validators.email]],
      rol: [this.userToEdit?.rol || '']
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const user: User = this.userForm.value;

    if (this.userToEdit) {
      this.store.dispatch(updateUser({ user }));
    } else {
      // Simula ID en frontend (si no usás backend real aún)
      user.id = Date.now();
      this.store.dispatch(addUser({ user }));
    }

    this.userForm.reset();
  }
}
