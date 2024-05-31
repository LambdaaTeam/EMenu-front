import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../axios';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [table, setTable] = useState({
    restaurantId: '',
    restaurantName: '',
    tableNumber: '',
    tableId: '',
    orderId: '',
    client: {
      name: '',
      cpf: '',
    },
    menu: {
      restaurant: '',
      highlights: [],
      categories: [],
    }
  });

  const fetchClient = ({ restaurantId, tableNumber, tableId, name, cpf, orderId }) => {
    setTable(prevTable => ({
      ...prevTable,
      restaurantId,
      tableNumber,
      tableId,
      client: {
        name,
        cpf,
      },
      orderId
    }));
  }

  const fetchRestaurant = async (restaurantId) => {
    try {
      const response = await api.get(`/restaurants/${restaurantId}`);
      setTable(prevTable => ({
        ...prevTable,
        restaurantName: response.data.name,
      }));
    } catch (error) {
      console.error('Error fetching the restaurant:', error);
    }
  }

  const fetchMenu = async (restaurantId) => {
    try {
      const response = await api.get(`/restaurants/${restaurantId}/menu`);
      setTable(prevTable => ({
        ...prevTable,
        menu: response.data,
      }));
    } catch (error) {
      console.error('Error fetching the menu:', error);
    }
  };

  useEffect(() => {
    if (table.restaurantId) {
      fetchMenu(table.restaurantId);
    }
  }, [table.restaurantId]);

  return (
    <TableContext.Provider value={{ table, fetchMenu, fetchRestaurant, fetchClient }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
