import { createContext } from 'react';

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
}

export interface UserContextValue {
  user: User | null,
  login: (u: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});