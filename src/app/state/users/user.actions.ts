import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: User }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: string }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: string }>());

export const deleteUser = createAction('[User] Delete User', props<{ userId: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ userId: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: string }>());
export const setPage = createAction('[User] Set Page', props<{ page: number }>());

export const setFilterRole = createAction('[User] Set Filter Role', props<{ role: string | null }>());
export const setFilterQuery = createAction('[User] Set Filter Query', props<{ query: string }>());
