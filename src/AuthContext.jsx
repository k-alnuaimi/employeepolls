import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    (storedUser)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  const login = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));

  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };



  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
