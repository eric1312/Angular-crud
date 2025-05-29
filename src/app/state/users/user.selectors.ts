import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(selectUserState, state => state.users);
export const selectLoading = createSelector(selectUserState, state => state.loading);
export const selectError = createSelector(selectUserState, state => state.error);

export const selectCurrentPage = createSelector(selectUserState, state => state.currentPage);
export const selectPageSize = createSelector(selectUserState, state => state.pageSize);

export const selectFilterRole = createSelector(selectUserState, state => state.filterRole);
export const selectFilterQuery = createSelector(selectUserState, state => state.filterQuery);




export const selectFilteredUsers = createSelector(
  selectAllUsers,
  selectFilterRole,
  selectFilterQuery,
  (users, role, query) => {
    return users.filter(user => {
      const matchesRole = role ? user.rol === role : true;
      const matchesQuery = `${user.nombre} ${user.apellido}`.toLowerCase().includes(query);
      return matchesRole && matchesQuery;
    });
  }
);

export const selectPaginatedUsers = createSelector(
  selectFilteredUsers,
  selectCurrentPage,
  selectPageSize,
  (users, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }
);

export const selectTotalPages = createSelector(
  selectFilteredUsers,
  selectPageSize,
  (users, pageSize) => Math.ceil(users.length / pageSize)
);
