import React from "react";
import { Link } from 'react-router-dom';

const Logo = require("../icons_assets/logo_vertical.png");

function Footer() {
  return (
    <footer>
      <div className="quarter" id="footerlogo">
        <img alt="Logo" src={Logo} />
      </div>
      <div className="quarter" id="navigation">
        <h4>Navigation</h4>
        <Link to="/">Home</Link>
        <a href="/#aboutus">About</a>
        <a href="/#dishes">Menu</a>
        <Link to="/reserve">Reserve</Link>
        <a href="/#reviewssection">Reviews</a>
        <a href="/login">Login</a>
       </div>
      <div className="quarter" id="socialMedia">
        <h4>Social Media</h4>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
      </div>
      <div className="quarter" id="contact">
        <h4>Contact</h4>
        <a href="/contact/#phone">Phone</a>
        <a href="/contact/#text">Text</a>
        <a href="/contact/#email">Email</a>
        <a href="/contact/#address">Address</a>
      </div>
    </footer>
  );
};

export default Footer;
