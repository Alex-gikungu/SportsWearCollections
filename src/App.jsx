import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Description from "./components/Description";
import SignupLoginForm from "./components/SignupLoginForm";
import ProductWishlist from "./components/ProductWishList";
import Wishlist from "./components/WishList";

function App() {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sports")
      .then((res) => res.json())
      .then((data) => setSportsData(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products sportsData={sportsData} />} />
        <Route
          path="/description/:sportName/:id"
          element={<Description sportsData={sportsData} />}
        />
        {/* Pass the sportsData prop to the Wishlist component */}
        <Route path="/wishlist" element={<Wishlist sportsData={sportsData} />} />
        <Route path="/signuplogin" element={<SignupLoginForm />} />
        <Route path="/ProductWishList" element={<ProductWishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
