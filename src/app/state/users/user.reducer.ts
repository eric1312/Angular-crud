import { createReducer, on } from '@ngrx/store';
import { UserState, initialUserState } from './user.state';
import * as UserActions from './user.actions';

export const userReducer = createReducer(
  initialUserState,

  on(UserActions.loadUsers, state => ({ ...state, loading: true, error: null })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.addUser, state => ({ ...state, loading: true })),
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false
  })),
  on(UserActions.addUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.updateUser, state => ({ ...state, loading: true })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    loading: false
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.deleteUser, state => ({ ...state, loading: true })),
  on(UserActions.deleteUserSuccess, (state, { userId }) => ({
    ...state,
    users: state.users.filter(u => u.id !== userId),
    loading: false
  })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.setPage, (state, { page }) => ({
    ...state,
    currentPage: page
  })),

  on(UserActions.setFilterRole, (state, { role }) => ({
    ...state,
    filterRole: role,
    currentPage: 1 // resetear a primera página
  })),

  on(UserActions.setFilterQuery, (state, { query }) => ({
    ...state,
    filterQuery: query.toLowerCase(),
    currentPage: 1
  }))
);
