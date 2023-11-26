import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";

function Navigation() {
  return (
    <navigation>
      <ul>
        <li><Logo /></li>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><a href="/#reservation">Reservation</a></li>
        <li><a href="/#order">Order</a></li>
      </ul>
    </navigation>
  );
};

export default Navigation;
