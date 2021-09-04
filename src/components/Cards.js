import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a peak at these great destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="imagesimg-9.jpg/"
              text="Explore hidden waterfalls!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="imagesimg-2.jpg/"
              text="Travel the Islands of Bali"
              label="Beautiful Scenes"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="imagesimg-3.jpg/"
              text="Set Sail in the Atlantic Ocean"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="imagesimg-4.jpg/"
              text="Experience Soccer in the Himilayas"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="imagesimg-8.jpg/"
              text="Explore the vast Sahara Desert"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
