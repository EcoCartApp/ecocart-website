import React from "react";

import "../stylesheets/Landing.css";

const Landing = React.forwardRef((props, ref) => {
  return (
    <section id="landing">
      <div ref={ref}>
        <img src={props.logo} alt="EcoCart" id="logo" />
        <div id="content">
          <h1>Click Button. Save Planet.</h1>
          <h3>
            EcoCart instantly makes your online orders carbon neutral at no cost
            to you
          </h3>
          <a
            className="btn add-button"
            size="lg"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Add to Chrome</b> — It's Free!
          </a>
        </div>
        <a href="#how-it-works">
          <div className="scroll-down"></div>
        </a>
      </div>
    </section>
  );
});

export default Landing;
