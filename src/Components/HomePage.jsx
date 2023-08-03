import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Products from "./Products";
import Wishlist from "./WishList";
function HomePage() {

  const handleHomeButtonClick = () => {
    history.push("/"); 
  };

  const handleProductsButtonClick = () => {
    <Products/>
    history.push("/products");
  };

  const handleWishlistsButtonClick = () => {
    <Wishlist/>
    history.push("/wishlist");
  };

  return (
    <>
    <NavBar/>
    <div className="cover-page">
      <div className="logo">
      <img src="1.png"/>
      </div>
      
      <div className="logo_s">
        <button className="btn_0">KICKOFF MART</button>
        <p>-Your one stop shop for every sportwear-</p>
      </div>

         <div className="btn_1">
      <button className="btn1" onClick={handleHomeButtonClick}>HOME</button>
      <button className="btn2"onClick={handleProductsButtonClick}>PRODUCTS</button>
      <button className="btn3"onClick={handleWishlistsButtonClick}>WISHLIST</button>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default HomePage;






