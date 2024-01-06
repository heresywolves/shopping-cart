import { createContext } from "react";
import products from "../products";
import { useState } from "react";

const ShopContext = createContext(null);

// Structure of cartItems, where the key is item id:
// {
//   1: 0,
//   2: 1,
//   3: 0,
// }

function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(null);

  const addToCart = (itemId) => {
    console.log(cartItems);
    // setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

  const populateCartStructure = (responce) => {
    // Responce here should come from a fetch request and contain an array of product objects
    let cart = {}
    console.log('products length: ' + responce.length);
    for (let i = 0; i < responce.length; i++) {
      cart[responce[i].id] = 0;
    }
    console.log(cart);
    return cart;
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    populateCartStructure
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContextProvider, ShopContext };