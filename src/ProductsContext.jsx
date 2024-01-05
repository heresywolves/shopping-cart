import { useState, createContext, useContext } from "react";

const ProductsContext = createContext();

function useProducts() {
  return useContext(ProductsContext);
}

function ProductsProvider({children}) {
  const [ products, setProducts ] = useState(null);

  function handleAddProducts(productResponce) {
    setProducts(productResponce);  
  }

  const providerValues = {
    products,
    handleAddProducts,
  };

  return <ProductsContext.Provider value={providerValues}>{children}</ProductsContext.Provider>
}

export { useProducts, ProductsProvider };