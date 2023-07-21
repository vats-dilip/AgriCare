import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider
      value={[isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin]}
    >
      {children}
    </AuthContext.Provider>
  );
};
