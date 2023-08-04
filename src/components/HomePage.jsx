import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HomePage() {
  const coverPageStyle = {
    backgroundImage: `url('/saved.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <>
      <NavBar />
      <div className="cover-page" style={coverPageStyle}>
        <div className="logo">
          <img src="1.png" alt="Logo" />
        </div>

        <div className="logo_s">
          <button className="btn_0">KICKOFF MART</button>
          <p>-Your one-stop shop for every sportswear-</p>
        </div>

        <div className="btn_1">
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
