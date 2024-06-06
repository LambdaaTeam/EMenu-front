import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../axios';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const restaurantId = localStorage.getItem('restaurant_id'); 
  const [table, setTable] = useState({
    restaurantName: '',
    tableNumber: '',
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

  const fetchClient = ({ tableNumber, name, cpf }) => {
    setTable(prevTable => ({
      ...prevTable,
      tableNumber,
      client: {
        name,
        cpf,
      },
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
    if (restaurantId) {
      fetchRestaurant(restaurantId);
      fetchMenu(restaurantId);
    }
  }, [restaurantId]);

  return (
    <TableContext.Provider value={{ table, fetchMenu, fetchRestaurant, fetchClient }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableContext);
};
