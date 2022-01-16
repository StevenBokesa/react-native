import React, { createContext, useState } from 'react';
import { auth } from '../data/firebase';






/**
 * This provider is created
 * to access user in whole app
 */

 export interface IAuth {
    user: any,
    setUser: any,
    login: any,
    register: any,
    logout: any
}

export const AuthContext = createContext<Partial<IAuth>>({});


export const AuthProvider  = ({children}:{ children: any }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: any, password: any) => {
          try {
            await auth
                    .signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: any, password: any) => {
          try {
            await auth
                    .createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth
                    .signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 