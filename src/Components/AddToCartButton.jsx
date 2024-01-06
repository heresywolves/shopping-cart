import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";


function AddToCartButton({itemId}) {
  const { addToCart } = useContext(ShopContext);
  function handleAddToCart(e) {
    addToCart(itemId);
  }
  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  )
}

export default AddToCartButton;