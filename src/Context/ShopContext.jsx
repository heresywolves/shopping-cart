import { createContext } from "react";
import { useState } from "react";

const ShopContext = createContext(null);

// Structure of cartItems, where the key is item id and value is the qty:
// {
//   1: 0,
//   2: 1,
//   3: 0,
// }

function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(null);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  const subtractFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

  const populateCartStructure = (responce) => {
    // Responce here should come from a fetch request and contain an array of product objects
    let cart = {}
    for (let i = 0; i < responce.length; i++) {
      cart[responce[i].id] = 0;
    }
    setCartItems(cart);
  }

  const setQty = (itemId, qty) => {
    setCartItems((prev) => ({...prev, [itemId]: qty}));
  }

  const nullifyQty = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: 0}));
  }

  const isCartEmpty = () => {
    if (cartItems) {
      for (const [key, value] of Object.entries(cartItems)) {
      if (value > 0) {
        return false;
      } 
      }
      return true;
    }
  }

  const contextValue = {
    cartItems,
    addToCart,
    subtractFromCart,
    populateCartStructure,
    setQty,
    nullifyQty,
    isCartEmpty
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContextProvider, ShopContext };