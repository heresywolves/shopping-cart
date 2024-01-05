import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCart from './ShoppingCart.jsx';
import { CartProvider } from './CartContext.jsx';
import { ProductsProvider } from './ProductsContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider >
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
