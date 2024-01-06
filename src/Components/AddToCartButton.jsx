import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";


function AddToCartButton({itemId}) {

  const { 
    addToCart,
    subtractFromCart, 
    cartItems,
    setQty,
  } = useContext(ShopContext);

  let itemQty = 0;

  // Here we find the current qty of the item in the cart
  for (const [key, value] of Object.entries(cartItems)) {
    if (key == itemId) {
      itemQty = value;
    }
  }

  function handleAddToCart() {
    addToCart(itemId);
  }

  function handleSubtractFromCart() {
    subtractFromCart(itemId);
  }

  function handleInputChange(e) {
    setQty(itemId, +e.target.value);   
  }

  return (
    <>
      {(itemQty == 0) ?
      (<button onClick={handleAddToCart}>Add to Cart</button>):
      (<div className="qty-input-wrapper">
        <button onClick={handleSubtractFromCart}> - </button>
        <input type="number" onChange={handleInputChange} value={itemQty}/>
        <button onClick={handleAddToCart}> + </button>
      </div>)
      }
    </>
  )
}

export default AddToCartButton;