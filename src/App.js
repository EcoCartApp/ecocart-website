import React from "react";

// COMPONENT IMPORTS
import Landing from "./components/Landing";
import AffiliateStores from "./components/AffiliateStores";
import WhyEcocart from "./components/WhyEcocart";
import ImpactBox from "./components/ImpactBox";
import FaqBox from "./components/Faq";
import useSticky from "./hooks/useSticky";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import ProjectBox from "./components/ProjectBox";
import Button from "react-bootstrap/Button";

//MEDIA IMPORTS
import works from "./videos/works.mp4";
import tree from "./img/tree.png";
import earth from "./img/earth.png";
import waterProj from "./img/projects/water-project.png";
import forestProj from "./img/projects/forest-project.png";
import windProj from "./img/projects/wind-project.png";
import un6 from "./img/projects/UN-Sustainability-Goal-6.png";
import un7 from "./img/projects/UN-Sustainability-Goal-7.png";
import un8 from "./img/projects/UN-Sustainability-Goal-8.png";
import un9 from "./img/projects/UN-Sustainability-Goal-9.png";
import un13 from "./img/projects/UN-Sustainability-Goal-13.png";
import un14 from "./img/projects/UN-Sustainability-Goal-14.png";
import un15 from "./img/projects/UN-Sustainability-Goal-15.png";
import verifiedCarbon from "./img/projects/verified-carbon-offset.png";
import energyGlobe from "./img/projects/Energy-Globe.jpg";
import americanCarbon from "./img/projects/american-carbon-registry.jpg";
import goldStandard from "./img/projects/gold-standard.png";
import StarIcon from "mdi-react/StarIcon"; //https://www.npmjs.com/package/mdi-react
import logo from "./img/logo.png";

// STATIC IMPORTS
import reviews from "./static/reviews";
import faqs from "./static/faqs";

import "./App.css";

const App = () => {
  const { isSticky, element } = useSticky();

  return (
    <div className="App">
      <Navbar sticky={isSticky} />
      <Landing ref={element} logo={logo} />
      <AffiliateStores />
      <section id="how-it-works">
        <Video video={works} stepOne="1" stepTwo="4" stepThree="10"></Video>
      </section>
      <WhyEcocart />

      {/* Impact section */}
      <section id="impact">
        <h1 className="center">EcoCart community impact</h1>
        <div className="impact-box-container">
          <ImpactBox
            start={0}
            count={4123477}
            duration={4}
            subtitle={
              <>
                lbs of CO<sub>2</sub> offset
              </>
            }
            icon={earth}
          ></ImpactBox>
          <div class="spacer"></div>
          <ImpactBox
            start={0}
            count={8247}
            duration={3}
            subtitle="trees saved"
            icon={tree}
          ></ImpactBox>
        </div>
        <div className="impact-subtitle-container">
          <h2 className="center impact-sub-heading">
            <span>We do this by...</span>
          </h2>
        </div>

        {/* Projects EcoCart is involved with */}
        <div className="project-boxes">
          <ProjectBox
            projectImg={forestProj}
            title="Protecting forests"
            location="Massachusetts"
            bullets={[
              "Protects a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year",
              "Protects habitat for a variety of threatened mammals, firs, and reptiles",
              "Experienced forest management project operator",
            ]}
            verifications={[americanCarbon, verifiedCarbon]}
            developments={[un6, un13, un14, un15]}
          ></ProjectBox>

          <ProjectBox
            projectImg={waterProj}
            title="Providing clean water"
            location="Cambodia"
            bullets={[
              "Reduces air pollution while protecting forests and local ecosystems",
              "Creates jobs and economic growth in under-served communities",
              "Reduces child illnesses and deaths caused by contaminated water and indoor pollution",
            ]}
            verifications={[energyGlobe, goldStandard]}
            developments={[un6, un8, un13, un15]}
          ></ProjectBox>

          <ProjectBox
            projectImg={windProj}
            title="Creating wind energy"
            location="Turkey"
            bullets={[
              "Displaces fossil fuel-based energy",
              "Diversifies the country’s energy balance and helps address demand supply gaps",
              "Alleviates poverty in the local community by providing construction and operations jobs",
            ]}
            verifications={[goldStandard]}
            developments={[un7, un8, un9, un13]}
          ></ProjectBox>
        </div>
      </section>

      {/* Review from customers */}
      <section id="testimonials">
        <h1>See why people love us</h1>
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />
        <StarIcon size={40} />
        {/* <i></i> */}
        <Testimonial reviews={reviews}></Testimonial>
      </section>

      {/* Frequently asked questions section */}
      <section id="questions">
        <div class="container">
          <h1>Questions?</h1>
        </div>
        <FaqBox faqs={faqs}></FaqBox>
        <br></br>
        <div class="container">
          <a href="https://www.google.com/">More FAQs</a>
        </div>
      </section>

      <section id="bottom">
        <h1>
          Ready to start <br></br> shopping sustainably?
        </h1>
        <Button className="add-button" size="lg">
          <b>Add to Chrome</b> - It's Free
        </Button>
      </section>
    </div>
  );
};

export default App;
