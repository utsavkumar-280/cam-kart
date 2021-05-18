import "./header.css";
import { Link, NavLink } from "react-router-dom";


export const Header=()=> {
  return (
    <div className="head-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  )
}


