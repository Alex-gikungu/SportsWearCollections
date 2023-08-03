import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignupLoginForm from "./SignupLoginForm";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Description({ sportsData }) {
  const { sportName, id } = useParams();
  const [showSignupLogin, setShowSignupLogin] = useState(false);

  const item =
    sportsData[sportName] &&
    sportsData[sportName][Object.keys(sportsData[sportName]).find(
      (categoryName) =>
        sportsData[sportName][categoryName].some((item) => item.id === parseInt(id, 10))
    )].find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div className="description">Item not found</div>;
  }

  const handleBuyButtonClick = () => {
    setShowSignupLogin(true);
  };

  return (
    <div className="container">
      {/* <NavBar /> */}
      <div className="description">
        <h2 className="description-title">{item.name}</h2>
        <div className="description-content">
          <img src={item.image} alt={item.name} className="description-image" />
          <p>{item.description}</p>
          <button onClick={handleBuyButtonClick}>{item.button}</button>
        </div>
      </div>
      {showSignupLogin && <SignupLoginForm />}
      <Footer />
    </div>
  );
}

export default Description;
