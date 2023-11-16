import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from './pages/searchResults.jsx';
import LibroDetalle from './pages/libroDetalle.jsx';

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
