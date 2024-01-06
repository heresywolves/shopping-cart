function AddToCartButton({itemId}) {
  function handleAddToCart(e) {
    console.log('adding to cart: ' + itemId)
  }
  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  )
}

export default AddToCartButton;