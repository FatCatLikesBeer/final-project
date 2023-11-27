import { React } from "react";
const heroImage = require("../icons_assets/restauranfood.jpg");

export default function Hero() {
  return (
    <div id="herosection">
      <div id="herocopy">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p id="herodescription">
          We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist.
        </p>
      </div>
      <div id="heroimagediv">
        <img id="heroimage" src={heroImage} />
      </div>
    </div>
  );
};
