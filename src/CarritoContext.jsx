// CarritoContext.js
import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (libro) => {
    setCarrito((prevCarrito) => [...prevCarrito, libro]);
  };

  const value = { carrito, agregarAlCarrito };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
