import './App.css';
import { Routes, Route } from "react-router-dom";

import {
  Footer,
  Header,
  Home,
  ProductDetail,
  ProductsCatalog,
  PrivateRoute,
  Wishlist,
  Cart,
  Login,
  ForgotPassword,
  Signup,
  NotFoundPage
} from "./Components";


const App=()=> {
  return (
    <div className="app-container">
      <div className="app-main">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsCatalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <PrivateRoute path="/wishlist" element={<Wishlist />} />
          <PrivateRoute path="/cart" element={<Cart />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/> }/>
          <Route path="/forgot-pass" element={<ForgotPassword />} />
          <Route path="*" element={<NotFoundPage/> }/>  
        </Routes> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;