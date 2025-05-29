export interface User {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol?: 'Admin' | 'User';
}
