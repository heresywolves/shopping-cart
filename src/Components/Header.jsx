import './Header.css'
import { Link } from "react-router-dom";

function Header({linkUrl}) {
  return (
    <header className="header">
      {(linkUrl === "cart") ? 
      <Link to="cart">Cart</Link> :
      <Link to="/">Back to shopping</Link> 
      }
    </header>
  )
}

export default Header;