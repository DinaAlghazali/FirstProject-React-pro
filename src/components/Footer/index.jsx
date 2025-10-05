import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import qr from "../../assets/qr.jpg";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Exclusive Section */}
        <div className="footer__col">
          <h3 className="footer__title">Exclusive</h3>
          <p className="footer__subtitle">Subscribe</p>
          <p className="footer__text">Get 10% off your first order</p>
          <div className="footer__input">
            <input type="email" placeholder="Enter your email" />
            <button>&#10148;</button>
          </div>
        </div>

        {/* Support */}
        <div className="footer__col">
          <h3 className="footer__title">Support</h3>
          <p className="footer__text">111 Bijoy sarani, Dhaka,</p>
          <p className="footer__text">DH 1515, Bangladesh.</p>
          <p className="footer__text">exclusive@gmail.com</p>
          <p className="footer__text">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div className="footer__col">
          <h3 className="footer__title">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="footer__col">
          <h3 className="footer__title">Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div className="footer__col">
          <h3 className="footer__title">Download App</h3>
          <p className="footer__text small">
            Save $3 with App New User Only
          </p>
          <div className="footer__app">
            <img src={qr} alt="QR Code" />
            <div>
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
          <div className="footer__socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
