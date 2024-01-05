import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

function useCart() {
  return useContext(CartContext);
}

function CartProvider({children}) {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    console.log('New items in cart: ' + items)
  }, [items])
  
  function handleAddItemToCart(newItem) {
    console.log('in the handleAddItemToCart function');
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const providerValues = {
    items,
    handleAddItemToCart,
  };

  return <CartContext.Provider value={providerValues}>{children}</CartContext.Provider>
}

export { useCart, CartProvider };