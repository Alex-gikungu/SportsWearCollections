import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="cover-page">
        <div className="logo">
          <img src="1.png" />
        </div>

        <div className="logo_s">
          <button className="btn_0">KICKOFF MART</button>
          <p>-Your one stop shop for every sportswear-</p>
        </div>

        <div className="btn_1">
          {/* Use Link components instead of buttons */}
          <Link className="btn1" to="/">
            HOME
          </Link>
          <Link className="btn2" to="/products">
            PRODUCTS
          </Link>
          <Link className="btn3" to="/wishlist">
            WISHLIST
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;




