import React, { useState, createContext } from 'react';

export const NameContext = createContext();

export default function AuthContext({ children }) {
  const [state, setState] = useState("");

  return (
    <NameContext.Provider value={{ state, setState, }}>
      {children} 
    </NameContext.Provider>
  );
}
