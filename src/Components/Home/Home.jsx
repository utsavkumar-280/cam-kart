import "./home.css";
import { Link } from "react-router-dom";
// import Hero from "./assets/heroBanner.png";

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
      <section className="catagory-container">

      </section>
      <section className="brand-container">

      </section>
        
      </div>
        

      
    </div>
  )
}
