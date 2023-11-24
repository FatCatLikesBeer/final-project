import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";

function Footer() {
  return (
    <footer>
      <ul>
        <li><Logo /></li>
        <li>
          <p>Navigation</p>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/#reservation">Reservation</a></li>
            <li><a href="/#order">Order</a></li>
          </ul>
        </li>
        <li>
          <p>Social Media</p>
          <ul>
            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://www.tiktok.com" target="_blank">TikTok</a></li>
            <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
          </ul>
        </li>
        <li>
          <p>Contact</p>
          <ul>
            <li><a href="/contact/#phone">Phone</a></li>
            <li><a href="/contact/#text">Text</a></li>
            <li><a href="/contact/#email">Email</a></li>
            <li><a href="/contact/#address">Address</a></li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
