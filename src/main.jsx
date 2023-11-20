import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from './pages/searchResults.jsx';
import LibroDetalle from './pages/libroDetalle.jsx';
import Checkout from './pages/checkout.jsx';
import { CarritoProvider } from './CarritoContext.jsx';
import ErrorPage from './pages/errorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buscar",
    element: <SearchResults />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buscar/detalleLibro/:id",
    element: <LibroDetalle />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalleLibro/:id",
    element:  <LibroDetalle />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cesta",
    element: <Checkout/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <RouterProvider router={router} />
    </CarritoProvider>
  </React.StrictMode>
);
