import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from './pages/searchResults.jsx';
import LibroDetalle from './pages/libroDetalle.jsx';
import Checkout from './pages/checkout.jsx';
import { CarritoProvider } from './CarritoContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buscar",
    element: <SearchResults />,
  },
  {
    path: "/buscar/detalleLibro/:id",
    element: <LibroDetalle />,
  },
  {
    path: "/detalleLibro/:id",
    element:  <LibroDetalle />,
  },
  {
    path: "/cesta",
    element: <Checkout/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
    <RouterProvider router={router} />
    </CarritoProvider>
  </React.StrictMode>
);
