import "./header.css";
import { Link } from "react-router-dom";
import { MdCamera } from "react-icons/md";
import { FiShoppingBag,FiHeart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";


export const Header=()=> {
  return (
    <div className="head-container">
      <nav>
        <div className="left-head flex-align-center">
          <Link to="/" className="head-main-logo">
            <MdCamera className="head-logo" />
            <span className="head-camkart">CamKart</span>
            </Link>
          <Link to="/products" className="heading head-shop">SHOP</Link>
        </div>
        
        <div className="right-head flex-align-center">
          <Link to="/login" className="heading head-login ">
            <FaRegUserCircle className="head-icons head-rev-invisible"/>
            <span className="head-hidden">LOGIN</span>
          </Link>
          <Link to="/wishlist" className="heading "><FiHeart className="head-icons"/></Link>
          <Link to="/cart" className="heading"><FiShoppingBag className="head-icons"/></Link>
          
        </div>
      </nav>
    </div>
  )
}


