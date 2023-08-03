import React from "react";
import Wishlist from "./Wishlist";

function WishlistPage({ wishlistItems, sportsData }) {
  return (
    <div>
      <h2>Wishlist</h2>
      <Wishlist wishlistItems={wishlistItems} sportsData={sportsData} />
    </div>
  );
}

export default WishlistPage;
