import "./header.css";
import { Link } from "react-router-dom";
import Bag from "./assets/bag.svg";
import Wish from "./assets/like.svg"


export const Header=()=> {
  return (
    <div className="head-container">
      <nav>
        <div className="left-head flex-align-center">
          <Link to="/" className="head-logo">CamKart</Link>
          <Link to="/products" className="heading">SHOP</Link>
        </div>
        
        <div className="right-head flex-align-center">
          <Link to="/login" className="heading">LOGIN</Link>
          <Link to="/wishlist" className="heading"><img src={Wish} alt="wishlist-img" className="head-icons"/></Link>
          <Link to="/cart" className="heading"><img src={Bag} alt="cart-img" className="head-icons"/></Link>
        </div>
      </nav>
    </div>
  )
}


