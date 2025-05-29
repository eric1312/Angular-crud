import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan@example.com', rol: 'Admin' },
    { id: 2, nombre: 'Ana', apellido: 'López', email: 'ana@example.com', rol: 'User' }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500));
  }

  addUser(user: User): Observable<User> {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
    return of(newUser).pipe(delay(500));
  }

  updateUser(updated: User): Observable<User> {
    this.users = this.users.map(user => user.id === updated.id ? updated : user);
    return of(updated).pipe(delay(500));
  }

  deleteUser(id: number): Observable<number> {
    this.users = this.users.filter(user => user.id !== id);
    return of(id).pipe(delay(500));
  }
}
