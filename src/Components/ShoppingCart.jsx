import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import products from "../products";
import ProductCard from "./ProductCard";

const ShoppingCart = () => {

  const { 
    addToCart,
    subtractFromCart, 
    cartItems,
    setQty,
  } = useContext(ShopContext);

  return (
    <div>
      <h1>Shopping cart</h1>
      <Link to="/">Back to shopping</Link>
      {products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <ProductCard key={item.id} item={item}/>
          )
        }
      })}
    </div>
  )
};

export default ShoppingCart;