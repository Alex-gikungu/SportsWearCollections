import React from "react";
import Wishlist from "./WishList";

function WishlistPage({ wishlistItems, sportsData }) {
  return (
    <div>
      <h2>My Wishlist</h2>
      <Wishlist wishlistItems={wishlistItems} sportsData={sportsData} />
      <Wishlist/>
    </div>
  );
}

export default WishlistPage;
