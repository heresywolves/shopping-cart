import { ShopContext } from "../Context/ShopContext";
import { useContext, useEffect, useState } from "react";
import products from "../products";
import ProductCard from "./ProductCard";
import calcCartTotal from "../utils/calcCartTotal";
import Popup from "./Popup";
import Header from "./Header";
import './ShoppingCart.css'

const ShoppingCart = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const { 
    cartItems,
    nullifyQty,
    isCartEmpty,
  } = useContext(ShopContext);

  function handleRemoveItem(itemId) {
    nullifyQty(itemId);
  }

  function handlePlaceOrder() {
    setIsOrderPlaced(true);
  }

  function handleClosePopup() {
    setIsOrderPlaced(false);
  }

  return (
    <div>
      <Header linkUrl={'/'}/>
      <div className="shopping-cart-container">
        <h1>Shopping cart</h1>
        {(isCartEmpty()) ? (
          <p className="empty-cart-message">Your shopping cart is empty</p> 
        ):(
          <div className="added-products-container">
            {products.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div className="product-card-container" key={item.id}>
                    <ProductCard className="product-card" key={item.id} item={item}/>
                    <button 
                    className="remove-item-button" 
                    onClick={() => handleRemoveItem(item.id)
                    }>X</button>
                  </div>
                );
              }
            })}
            <p className="total-price" >{'Total: $' + calcCartTotal()}</p>
            <button className="place-order-button" onClick={handlePlaceOrder}>Place order</button>
          </div>
        )}
        {(isOrderPlaced && 
        <Popup 
        content={'Your order has been placed'} 
        confirmAction={handleClosePopup}
        />)}
      </div>
    </div>
  )
};

export default ShoppingCart;