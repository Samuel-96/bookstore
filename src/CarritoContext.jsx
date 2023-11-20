// CarritoContext.js
import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  
  const obtenerNumeroLibros = () => {
    return carrito.length;
  };

  const agregarAlCarrito = (libro) => {
    setCarrito((prevCarrito) => {

      const libroExistente = prevCarrito.find((prevLibro) => prevLibro.id === libro.id);
  
      if (libroExistente) {

        return prevCarrito.map((prevLibro) =>
          prevLibro.id === libro.id ? { ...prevLibro, cantidad: prevLibro.cantidad + 1 } : prevLibro
        );
      } else {

        return [...prevCarrito, { ...libro, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  const value = { carrito, agregarAlCarrito, eliminarDelCarrito, obtenerNumeroLibros };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
