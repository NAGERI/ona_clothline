import { createContext, useEffect, useState } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    /**This is run whenever you initialize a listner. */
    const unsubscribe = onAuthStateChangedListner(async (user) => {
      console.log(user);
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
