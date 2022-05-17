import { createContext } from 'react';
import { UserInterface } from '../shared/userInfo.interface';

export const UserContext = createContext({
  user: UserInterface,
  userProfile: null,
});
export const ApplicationContext = createContext({ application: null });
