import "./home.css";
import { Link } from "react-router-dom";
import Dslr from "./assets/dslr.png";
import Mirrorless from "./assets/mirrorless.png";
import Action from "./assets/action.png";
import Lens from "./assets/lens.png";
import Gimbal from "./assets/gimbal.png";
import Accessories from "./assets/accessories.png";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero ">
        <div className=" flex-column-center hero-text">
          <div className="hero-head-small margin-5">20% OFF PROMOTIONAL SALE</div>
          <div className="hero-head-large">Whatever you need for a</div>
          <div className="hero-head-large">great picture.</div>
          <div className="hero-head-medium margin-5">
            <p>
              Choose from our wide range of products<br/>
              including DSLRs, Mirrorless cameras,<br/>
              Action cameras,Video cameras,<br/>
              and many more.<br/>
            </p>
          </div>
          <Link to="/products">
            <button className="hero-button margin-5">Browse Products</button>
          </Link>   
        </div>  
      </section>

      <div className="home-main">
        <section className="category-container">
          <div className="home-head-text">Category</div>
          <div className="cat-main-grid">
            <div className="cat-card-container">
              <div className="cat-card-head">DSLR</div>
              <img src={Dslr} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
            <div className="cat-card-container">
              <div className="cat-card-head">MIRRORLESS</div>
              <img src={ Mirrorless} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
            <div className="cat-card-container">
              <div className="cat-card-head">ACTION</div>
              <img src={ Action} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
            <div className="cat-card-container">
              <div className="cat-card-head">LENS</div>
              <img src={ Lens} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
            <div className="cat-card-container">
              <div className="cat-card-head">GIMBAL</div>
              <img src={ Gimbal} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
            <div className="cat-card-container">
              <div className="cat-card-head">ACCESSORIES</div>
              <img src={ Accessories} alt="dslr-img" className="cat-card-img" />
              <Link to="/products"><button className="cat-card-button">Shop Now</button></Link>
            </div>
          </div>
        </section>
        <section className="brand-container">
          <div className="home-head-text">Shop by Brand</div>
          <div className="brand-main-grid">
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand-sony brand"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-canon"></div></div></Link>         
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-nikon"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-panasonic"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-fujifilm"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-sigma"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-dji"></div></div></Link>
            <Link to="/wishlist"><div className="brand-logo"><div className=" brand brand-gopro"></div></div></Link>
          </div>
        </section>
      </div>
        

      
    </div>
  )
}
