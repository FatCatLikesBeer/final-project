import React from "react";

const Logo = require("../icons_assets/logo_vertical.png");

function Footer() {
  return (
    <footer>
      <div className="quarter" id="footerlogo">
        <img src={Logo} />
      </div>
      <div className="quarter" id="navigation">
        <h4>Navigation</h4>
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#menu">Menu</a>
        <a href="/#reservation">Reservation</a>
        <a href="/#order">Order</a>
      </div>
      <div className="quarter" id="socialMedia">
        <h4>Social Media</h4>
        <a href="https://www.twitter.com" target="_blank">Twitter</a>
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
        <a href="https://www.tiktok.com" target="_blank">TikTok</a>
        <a href="https://www.youtube.com" target="_blank">YouTube</a>
      </div>
      <div className="quarter" id="contact">
        <h4>Contact</h4>
        <a href="/contact/#phone">Phone</a>
        <a href="/contact/#text">Text</a>
        <a href="/contact/#email">Email</a>
        <a href="/contact/#address">Address</a>
      </div>
      <div className="quarter"></div>
    </footer>
  );
};

export default Footer;
