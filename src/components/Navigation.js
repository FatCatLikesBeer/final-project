import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";

function Navigation() {
  return (
    <>
      <div id="headerlogo"><Logo /></div>
      <div id="navrow">
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#menu">Menu</a>
        <a href="/#reserve">Reserve</a>
        <a href="/#order">Order</a>
      </div>
    </>
  );
};

export default Navigation;
