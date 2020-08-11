import React from "react";

import tree from "../img/tree.png";
import "../stylesheets/WhyEcocart.css";

const WhyEcocart = () => {
  return (
    <section id="why-ecocart">
      <h1>Why EcoCart?</h1>
      <div className="reason-container">
        <div className="reason">
          <img src={tree} className="reason-icon"></img>
          <h2 className="reason-title">Rewards You'll Love</h2>
          <p className="reason-description">
            Fight climate change and earn gift <br></br> cards to your favorite
            stores.
          </p>
        </div>
        <div className="reason">
          <img src={tree} className="reason-icon"></img>
          <h2 className="reason-title">We Don't Sell Your Data</h2>
          <p className="reason-description">
            We're in the business of saving the <br></br> planet, not violating
            your privacy.
          </p>
        </div>
        <div className="reason">
          <img src={tree} className="reason-icon"></img>
          <h2 className="reason-title">You're in Control</h2>
          <p className="reason-description">
            Support the project that inspires you <br></br> most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyEcocart;
