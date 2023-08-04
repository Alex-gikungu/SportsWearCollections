
import React from "react";
import { Link } from "react-router-dom"; 

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>

          <li><Link className="btn1" to="/">Home</Link></li>
          <li><Link className="btn2" to="/products">Products</Link></li>
          <li><Link className="btn3" to="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

