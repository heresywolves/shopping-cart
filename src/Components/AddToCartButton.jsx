import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";


function AddToCartButton({itemId}) {
  const { addToCart, cartItems } = useContext(ShopContext);
  let itemQty = 0;

  for (const [key, value] of Object.entries(cartItems)) {
    if (key == itemId) {
      itemQty = value;
    }
  }

  function handleAddToCart(e) {
    addToCart(itemId);
  }
  return (
    <>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>{'Quantity: ' + itemQty}</p>
    </>
  )
}

export default AddToCartButton;