import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const defaultData = [];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
