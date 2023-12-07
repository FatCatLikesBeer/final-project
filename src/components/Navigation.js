import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div id="headerlogo"><Logo /></div>
      <div id="navrow">
        <Link to="/">Home</Link>
        <a href="/#aboutus">About</a>
        <a href="/#dishcomponent">Menu</a>
        <Link to="/reserve">Reserve</Link>
        <a href="/#">Reviews</a>
        <a href="/#login">Login</a>
      </div>
    </>
  );
};

export default Navigation;
