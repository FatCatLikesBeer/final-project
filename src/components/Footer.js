import React from "react";
import { ReactComponent as Logo } from "../icons_assets/logo.svg";

function Footer() {
  return (
    <footer>
      <quarter id="logo">
        <Logo />
      </quarter>
      <quarter id="navigation">
          <divTitle>Navigation</divTitle>
          <footerLink><a href="/#home">Home</a></footerLink>
          <footerLink><a href="/#about">About</a></footerLink>
          <footerLink><a href="/#menu">Menu</a></footerLink>
          <footerLink><a href="/#reservation">Reservation</a></footerLink>
          <footerLink><a href="/#order">Order</a></footerLink>
      </quarter>
      <quarter id="socialMedia">
          <divTitle>Social Media</divTitle>
          <footerLink><a href="https://www.twitter.com" target="_blank">Twitter</a></footerLink>
          <footerLink><a href="https://www.facebook.com" target="_blank">Facebook</a></footerLink>
          <footerLink><a href="https://www.instagram.com" target="_blank">Instagram</a></footerLink>
          <footerLink><a href="https://www.tiktok.com" target="_blank">TikTok</a></footerLink>
          <footerLink><a href="https://www.youtube.com" target="_blank">YouTube</a></footerLink>
      </quarter>
      <quarter id="contact">
          <divTitle>Contact</divTitle>
          <footerLink><a href="/contact/#phone">Phone</a></footerLink>
          <footerLink><a href="/contact/#text">Text</a></footerLink>
          <footerLink><a href="/contact/#email">Email</a></footerLink>
          <footerLink><a href="/contact/#address">Address</a></footerLink>
      </quarter>
    </footer>
  );
};

export default Footer;
