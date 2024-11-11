import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faLinkedin,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { assets } from "../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="left">
          <img src={assets.logoo} alt="" style={{width: '150px'}}/>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Pellentesque feugiat ex et ligula pulvinar,
            molestie vehicula ex iaculis. Fusce porttitor elit eu eros iaculis,
            sed posuere tellus tincidunt.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faSquareXTwitter} className="footer-icon" />
            <FontAwesomeIcon icon={faFacebook} className="footer-icon"/>
            <FontAwesomeIcon icon={faTiktok} className="footer-icon"/>
            <FontAwesomeIcon icon={faSquareInstagram} className="footer-icon"/>
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
          </div>
        </div>
        <div className="center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+254-716-641-112</li>
                <li>contact@tamu.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
      TAMU ©{new Date().getFullYear()} Created by Bubba Jaymes.

      </p>
    </div>
  );
}
