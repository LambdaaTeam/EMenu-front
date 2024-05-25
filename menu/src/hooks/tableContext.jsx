import React, { createContext, useContext, useState } from 'react';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState(null);
  const [tableId, setTableId] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);

  return (
    <TableContext.Provider value={{ tableNumber, setTableNumber, tableId, setTableId, restaurantId, setRestaurantId }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
