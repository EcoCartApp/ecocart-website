import React from "react";
import "../stylesheets/AffiliateStores.css";

// Affiliated stores
import foot_locker from "../img/affiliate-images/foot_locker.png";
import freshly from "../img/affiliate-images/freshly.png";
import glossier from "../img/affiliate-images/glossier.png";
import casper from "../img/affiliate-images/casper.png";
import kohls from "../img/affiliate-images/kohls.png";
import levis from "../img/affiliate-images/levis.png";
import nixon from "../img/affiliate-images/nixon.png";
import petco from "../img/affiliate-images/petco.png";
import ulta_beauty from "../img/affiliate-images/ulta_beauty.png";
import vans from "../img/affiliate-images/vans.png";

const AffiliateStores = () => {
  return (
    <section id="affiliate-stores">
      <h1 id="affiliate-title">
        Shop Sustainably at <br></br>10,000+ stores!
      </h1>
      <img className="store-lg" id="foot-locker" src={foot_locker} alt="foot-locker logo"></img>
      <img className="store-md" id="freshly" src={freshly} alt="freshly logo"></img>
      <img className="store-md" id="glossier" src={glossier} alt="glossier logo"></img>
      <img className="store-lg" id="casper" src={casper} alt="casper logo"></img>
      <img className="store-md" id="kohls" src={kohls} alt="kohls logo"></img>
      <img className="store-lg" id="levis" src={levis} alt="levis logo"></img>
      <img className="store-md" id="nixon" src={nixon} alt="nixon logo"></img>
      <img className="store-md" id="petco" src={petco} alt="petco logo"></img>
      <img className="store-lg" id="ulta_beauty" src={ulta_beauty} alt="ulta_beauty logo"></img>
      <img className="store-md" id="vans" src={vans} alt="vans logo"></img>
    </section>
  );
};

export default AffiliateStores;
