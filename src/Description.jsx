import React from "react";
import { useParams } from "react-router-dom";
import SignupLoginForm from "./SignupLoginForm";

function Description({ sportsData }) {
  const { sportName, id } = useParams();


  const item =
    sportsData[sportName] &&
    sportsData[sportName][Object.keys(sportsData[sportName]).find(
      (categoryName) =>
        sportsData[sportName][categoryName].some(
          (item) => item.id === parseInt(id, 10)
        )
    )].find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div className="description">Item not found</div>;
  }

  return (
    <>
    <div className="description">
      <h2 className="description-title">{item.name}</h2>
      <div className="description-content">
        <img src={item.image} alt={item.name} className="description-image" />
        <p>{item.description}</p>
        <button>{item.button}</button>
      </div>
    </div>
    <SignupLoginForm/>
    </>
  );
}

export default Description;