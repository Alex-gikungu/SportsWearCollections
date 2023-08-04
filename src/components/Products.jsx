import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import WishlistPage from "./WishListPage";
function NavBar({ totalItemsInWishlist }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to ={WishlistPage}>Wishlist ({totalItemsInWishlist})</Link>
        </li>
      </ul>
    </nav>
  );
}
             
function Wishlist({ wishlistItems, removeFromWishlist }) {
  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      <div>
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products({ sportsData }) {
  const [selectedSport, setSelectedSport] = useState(null);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleSportSelection = (sportName) => {
    setSelectedSport((prevSelectedSport) =>
      prevSelectedSport === sportName ? null : sportName
    );
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== itemId)
    );
  };

  return (
    <>
      <NavBar totalItemsInWishlist={wishlistItems.length} />
      <div className="products-container">
        <h2>Sports Categories</h2>
        <div className="sports-buttons">
          <button onClick={() => handleSportSelection("basketball")}>
            Basketball
          </button>
          <button onClick={() => handleSportSelection("football")}>
            Football
          </button>
          <button onClick={() => handleSportSelection("tennis")}>Tennis</button>
        </div>
        {Object.keys(sportsData).map((sportName) => (
          <div
            key={sportName}
            className={`sport-section ${
              selectedSport === sportName ? "active" : ""
            }`}
          >
            {selectedSport === sportName &&
              Object.keys(sportsData[sportName]).map((categoryName) => (
                <div key={categoryName} className="category-section">
                  <h3>{categoryName}</h3>
                  <div className="item-container">
                    {sportsData[sportName][categoryName].map((item) => (
                      <div key={item.id} className="item-box">
                        <Link to={`/description/${sportName}/${item.id}`}>
                          <img src={item.image} alt={item.name} />
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </Link>
                        <button onClick={() => addToWishlist(item)}>
                          Add to Wishlist
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Wishlist className="wish"
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
      />
      <Footer/>
    </>
  );
}


export default Products;