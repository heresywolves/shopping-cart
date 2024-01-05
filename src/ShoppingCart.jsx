import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useEffect } from "react";
import QuantitySelector from "./QuantitySelector";

const ShoppingCart = () => {

  const {
    items,
  } = useCart();

  useEffect(() => {
    console.log('cartItems - ' + items);

    // Check for duplicate keys
    const itemIds = items.map((item) => item.id);
    const hasDuplicates = new Set(itemIds).size !== itemIds.length;
    if (hasDuplicates) {
      console.warn('Duplicate keys found in items array:', itemIds);
    }
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
                <QuantitySelector item={item} />
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