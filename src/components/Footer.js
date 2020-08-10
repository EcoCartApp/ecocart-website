import React from "react";

import logo from "../img/logo.png";
import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-ecocart-businesses">
          <div className="footer-logo">
            <img
              className="ecocart-logo"
              width="256"
              src={logo}
              alt="ecocart logo"
            ></img>
          </div>
          <div className="ecocart-businesses">
            <div className="footer-ecocart">
              <h2>EcoCart</h2>
              <a
                href="https://ecocart.io/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <a
                href="https://ecocart.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              <a
                href="https://ecocart.io/terms-of-service/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href="https://ecocart.io/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            </div>
            <div className="footer-businesses">
              <h2>For Businesses</h2>
              <a
                href="https://admin.ecocart.io/registration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify App
              </a>
              <a
                href="mailto:hello@ecocart.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become an Affiliate
              </a>
            </div>
          </div>
        </div>
        <div className="footer-underline">
          <div className="footer-underline-col">
            <a
              href="https://www.instagram.com/ecocart.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/instagram_logo.svg"
                alt="instagram logo"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/company/ecocart-io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/linkedin_logo.svg"
                alt="linkedin logo"
              ></img>
            </a>
            <a
              href="https://twitter.com/EcoCart_io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/twitter_logo.svg"
                alt="twitter logo"
              ></img>
            </a>
          </div>
          <div className="footer-underline-col">
            <div className="footer-location-text">
              <div>Made with <i className="heart"></i> in San Francisco, CA</div>
            </div>
            <div className="footer-copyright-text">
              All rights reserved<br></br>&copy; Ecocart 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;