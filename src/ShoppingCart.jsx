import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useEffect } from "react";

const ShoppingCart = () => {

  const {
    items,
  } = useCart();


  useEffect(() => {
    console.log('cartItems - ' + items);
  }, [items]);


  return (
    <div>
      <p>Shopping cart</p>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{'$' + item.price}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/">Back to shopping</Link>
    </div>
  )
};

export default ShoppingCart;