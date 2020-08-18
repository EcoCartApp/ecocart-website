import React from "react";

import logo from "../img/logo.png";
import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="logo-resources-about">
          <div className="footer-logo">
            <img
              className="ecocart-logo"
              width="256"
              src={logo}
              alt="ecocart logo"
            ></img>
          </div>
          <div className="resources-about">
            <div className="footer-resources">
              <h2>Resources</h2>
              <a href="https://ecocart.io/contact-us/" target="_blank">
                Contact Us
              </a>
              <a href="https://ecocart.io/how-it-works/" target="_blank">
                How It Works
              </a>
              <a href="https://admin.ecocart.io/registration/" target="_blank">
                Shopify App
              </a>
              <a href="https://ecocart.io/blog/" target="_blank">
                Blog
              </a>
              <a href="https://ecocart.io/our-projects/" target="_blank">
                Our Projects
              </a>
              <a href="https://ecocart.io/faq" target="_blank">
                FAQs
              </a>
            </div>
            <div className="footer-about">
              <h2>About</h2>
              <a href="https://ecocart.io/about-us/" target="_blank">
                About Us
              </a>
              <a href="https://ecocart.io/contact-us/" target="_blank">
                Join Our Team
              </a>
              <a href="https://ecocart.io/terms-of-service/" target="_blank">
                Terms of Service
              </a>
              <a href="https://ecocart.io/privacy-policy/" target="_blank">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="footer-underline">
          <div className="footer-underline-col">
            <a href="https://apps.shopify.com/ecocart" target="_blank">
              <img
                src="https://ecocart.io/wp-content/uploads/2020/01/image9.svg"
                alt="shopify logo"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/company/ecocart-io/"
              target="_blank"
            >
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/linkedin_logo.svg"
                alt="linkedin logo"
              ></img>
            </a>
            <a href="https://twitter.com/EcoCart_io" target="_blank">
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/twitter_logo.svg"
                alt="twitter logo"
              ></img>
            </a>
            <a href="https://www.instagram.com/ecocart.io/" target="_blank">
              <img
                src="https://ecocart.io/wp-content/themes/ecocart/images/instagram_logo.svg"
                alt="instagram logo"
              ></img>
            </a>
          </div>
          <div className="footer-underline-col">
            <div className="footer-location-text">
              Made with  <i className="heart"></i>  in San Francisco, CA
            </div>
            <div className="footer-copyright-text">All rights reserved<br></br>&copy; Ecocart 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
