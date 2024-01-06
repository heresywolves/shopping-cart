import products from "../products";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

function calcCartTotal() {
  const { cartItems } = useContext(ShopContext);
  let total = 0;
  products.forEach((item) => {
    if (cartItems[item.id] > 0) {
      total += item.price * cartItems[item.id];
    }
  })
  return Math.floor(total * 100) / 100;
}

export default calcCartTotal;