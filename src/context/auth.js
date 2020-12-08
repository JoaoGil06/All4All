import React, { createContext, useState, useContext } from "react";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { user, setUser } = context;

  return { user, setUser };
}

export function checkAuthChanged(setUser) {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      db.collection("users")
        .doc(authUser.uid)
        .get()
        .then((doc) => {
          console.log(doc);
          setUser({
            uid: authUser.uid,
            name: doc.data().name,
            email: authUser.email,
            city: doc.data().city,
            contact: doc.data().contact,
          });
        });
    } else {
      setUser(null);
    }
  });
}
