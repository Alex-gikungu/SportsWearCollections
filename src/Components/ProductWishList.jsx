import React, { useState } from "react";


const ProductWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((p) => p !== product));
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/sports");
    const data = await response.json();
    setWishlist(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 style="text-align: center;">Product Wishlist</h1>
      <ul style="list-style-type: none;">
        {wishlist.map((product) => (
          <li key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style="width: 100px; height: 100px;"
            />
            <p style="margin-top: 10px;">{product.name}</p>
            <button
              onClick={() => handleRemoveFromWishlist(product)}
              style="margin-top: 10px;"
            >
              Remove from Wishlist.
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleAddToWishlist({ name: "New Product", imageUrl: "" })}
        style="margin-top: 10px;"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductWishlist;