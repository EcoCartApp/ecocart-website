import React from "react";
// COMPONENT IMPORTS
import ImpactBox from "./components/ImpactBox";
import FaqBox from "./components/Faq";
import useSticky from "./hooks/useSticky";
import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import ProjectBox from "./components/ProjectBox";
import Button from "react-bootstrap/Button";
//MEDIA IMPORTS
import avatar from "./img/avatar.jpg";
import works from "./videos/works.mp4";
import sample1 from "./img/sample1.png";
import sample2 from "./img/sample2.png";
import logo from "./img/logo.png";

import "./App.css";
import { Carousel } from "react-bootstrap";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Navbar sticky={isSticky} />
      <section id="landing">
        <div ref={element}>
          <img src={logo} alt="EcoCart" id="logo" />
          <div id="content">
            <h1>Click Button. Save Planet.</h1>
            <h3>
              EcoCart instantly makes your online orders carbon neutral at no
              cost to you
            </h3>
            <Button className="add-button" size="lg">
              <b>Add to Chrome</b> - It's Free
            </Button>
          </div>
          <a href="#how-it-works">
            <div className="scroll-down"></div>
          </a>
          </div>
        </section>
      <div className="App">
        <section id="affiliate-stores">
          <h1>Shop Sustainably at</h1>
          <h1>10,000+ stores!</h1>
        </section>
        <section id="how-it-works">
          <Video video={works} stepOne="1" stepTwo="4" stepThree="10"></Video>
        </section>
        <section id="why-ecocart">
          <h1>Why EcoCart?</h1>
        </section>

        <section id="impact">
          <h1>EcoCart community impact</h1>
          <div className="row">
            <ProjectBox
              title="Protecting forests"
              location="Massachusetts"
              bullets={[
                "Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year",
                "Protects habitat for a variety of threatened mammals, birs, and reptiles",
                "Experienced forest management project operator",
              ]}
              verifications={[sample2, sample2]}
              developments={[sample1, sample1]}
            ></ProjectBox>
            <ProjectBox
              title="Providing clean water"
              location="Cambodia"
              bullets={[
                "Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year",
                "Protects habitat for a variety of threatened mammals, birs, and reptiles",
                "Experienced forest management project operator",
              ]}
              verifications={[sample2, sample2]}
              developments={[sample1, sample1]}
            ></ProjectBox>
            <ProjectBox
              title="Creating wind energy"
              location="Turkey"
              bullets={[
                "Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year",
                "Protects habitat for a variety of threatened mammals, birs, and reptiles",
                "Experienced forest management project operator",
              ]}
              verifications={[sample2, sample2]}
              developments={[sample1, sample1]}
            ></ProjectBox>
          </div>
        </section>

        <section id="testimonials">
          <h1>See why people love us</h1>
          <Testimonial
            reviews={[
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
              {
                avatar: avatar,
                quote:
                  "Fighting climate change while shopping at my favorite stores? Sign me up!",
                author: "Dane Baker",
              },
            ]}
          ></Testimonial>
        </section>
        <section id="questions">
          <div class="container">
            <h1>Questions?</h1>
          </div>
          <FaqBox></FaqBox>
          <br></br>
          <div class="container">
            <a href="https://www.google.com/">More FAQs</a>
          </div>
        </section>
        <section id="bottom">
          <h1>
            Ready to start <br></br>shopping sustainably?
          </h1>
          <Button className="add-button" size="lg">
            <b>Add to Chrome</b> - It's Free
          </Button>
        </section>
         <ImpactBox
          count="3,123,477"
          subtitle="lbs of CO2 offset"
          icon="🌎"
        ></ImpactBox>
        <ImpactBox count="6,247" subtitle="trees saved" icon="🌲"></ImpactBox>
      
      </div>
    </>
  );
}

export default App;
