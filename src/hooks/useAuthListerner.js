import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../services/firebase";


export const useAuthListener = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userAuth')))

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        setUser(userAuth);
      } else {
        localStorage.removeItem('userAuth');
        setUser(null);
      }
    })
    return () => listener();
  }, [auth])

  return { user };
}
