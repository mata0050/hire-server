import { createContext } from 'react';
import { UserContextState } from '../shared/userInfo.interface';



export const UserContext = createContext({
  user: null,
  userProfile: null,
} as UserContextState);
