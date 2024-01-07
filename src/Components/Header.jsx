import './Header.css'
import { Link } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import SmallRedDot from './SmallRedDot';

function Header({linkUrl}) {
  const { cartItems } = useContext(ShopContext);
  let addedItemsCount = (() => {
    Object.keys(cartItems).length;
    let count = 0;
    for (const [key, value] of Object.entries(cartItems)) {
      if (value > 0) {
        count++;
      }
    }
    return count;
  })();

  return (
    <header className="header">
      {(linkUrl === "cart") ? 
      <Link to="cart">
        {(addedItemsCount > 0) && (<SmallRedDot/>)}
        Cart 
        {(addedItemsCount > 0) && (<span>{'(' + addedItemsCount+ ')'}</span>)}
      </Link>:
      <Link to="/">Back to shopping</Link> 
      }
    </header>
  )
}

export default Header;