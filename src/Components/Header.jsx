import { Link } from "react-router-dom";

function Header({linkUrl}) {
  return (
    <div className="header">
      {(linkUrl === "cart") ? 
      <Link to="cart">View cart</Link> :
      <Link to="/">Back to shopping</Link> 
      }
    </div>
  )
}

export default Header;