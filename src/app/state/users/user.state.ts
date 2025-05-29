import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  filterRole: string | null;
  filterQuery: string;
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
  pageSize: 10,
  filterRole: null,
  filterQuery: ''
};
