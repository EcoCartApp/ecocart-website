import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../img/logo.png";
import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <div className="footer-component" style={{ backgroundColor: "#262626" }}>
      <Container>
        <Row className="no-gutters">
          <Col className="no-gutters" sm={12}>
            <Row className="logo-ecocart-businesses no-gutters">
              <Col
                className="footer-logo"
                sm={6}
                style={{ backgroundSize: "80%" }}
              >
                <img
                  className="ecocart-logo"
                  width="256"
                  src={logo}
                  alt="ecocart logo"
                ></img>
              </Col>
              <Col className="ecocart-businesses" sm={3}>
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
                  <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                    Help
                  </a>
                </div>
              </Col>
              <Col className="ecocart-businesses" sm={3}>
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
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="no-gutters" sm={12}>
            <div className="footer-underline">
              <Col className="footer-underline-col no-gutters" sm={4}>
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
              </Col>
              <Col className="no-gutters" sm={4}>
                <div>Made with <i className="heart"></i> in San Francisco, CA</div>
              </Col>
              <Col className="no-gutters" sm={4}>
                <div className="text-right">
                  All rights reserved<br></br>&copy; Ecocart 2020
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
