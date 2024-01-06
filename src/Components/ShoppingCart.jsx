import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import products from "../products";
import ProductCard from "./ProductCard";
import calcCartTotal from "../utils/calcCartTotal";

const ShoppingCart = () => {

  const { 
    cartItems,
    nullifyQty,
  } = useContext(ShopContext);

  function handleRemoveItem(itemId) {
    nullifyQty(itemId);
  }

  return (
    <div>
      <h1>Shopping cart</h1>
      <Link to="/">Back to shopping</Link>
      {products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <ProductCard className="product-card" key={item.id} item={item}/>
              <button onClick={() => handleRemoveItem(item.id)}>x Remove Item</button>
            </div>
          )
        }
      })}
      <p className="total">{'Total: $' + calcCartTotal()}</p>
    </div>
  )
};

export default ShoppingCart;