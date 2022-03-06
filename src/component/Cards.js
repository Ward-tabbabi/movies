import React from "react";
import card from "./Cards";
const Cards = ({ card }) => {
  return (
    <div className="cards">
      <div className="cart">
        <img src={card.posterurl} />
        <h1>{card.name}</h1>
        <p> {card.description} </p>
        <h3>{card.rating}</h3>
      </div>
      <div className="overview">
        <h1>overview</h1>
        this film is dedicated to any one love the sinema or any one have a time
        for a cinema movie
      </div>
    </div>
  );
};

export default Cards;
