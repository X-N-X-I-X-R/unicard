import React, { createContext, useState } from 'react';

// Create the context
export const PoolContext = createContext();

// Create a provider component
export const PoolProvider = ({ children }) => {
  const [poolName, setPoolName] = useState('');

  return (
    <PoolContext.Provider value={{ poolName, setPoolName }}>
      {children}
    </PoolContext.Provider>
  );
};
