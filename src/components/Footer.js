import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";

function Footer() {
  return (
    <footer>
      <quarter id="logo">
        <Logo />
      </quarter>
      <quarter id="navigation">
          <h4>Navigation</h4>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#menu">Menu</a>
          <a href="/#reservation">Reservation</a>
          <a href="/#order">Order</a>
      </quarter>
      <quarter id="socialMedia">
          <h4>Social Media</h4>
          <a href="https://www.twitter.com" target="_blank">Twitter</a>
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com" target="_blank">TikTok</a>
          <a href="https://www.youtube.com" target="_blank">YouTube</a>
      </quarter>
      <quarter id="contact">
          <h4>Contact</h4>
          <a href="/contact/#phone">Phone</a>
          <a href="/contact/#text">Text</a>
          <a href="/contact/#email">Email</a>
          <a href="/contact/#address">Address</a>
      </quarter>
    </footer>
  );
};

export default Footer;
