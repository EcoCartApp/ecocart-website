import React from "react";
import "../stylesheets/AffiliateStores.css";

// Affiliated stores
import nike from "../img/affiliate-images/nike.png";
import flowers from "../img/affiliate-images/flowers.png";
import colehaan from "../img/affiliate-images/colehaan.png";
import overstock from "../img/affiliate-images/overstock.png";
import microsoft from "../img/affiliate-images/microsoft.png";
import expedia from "../img/affiliate-images/expedia.png";
import glossier from "../img/affiliate-images/glossier.png";
import bloomingdale from "../img/affiliate-images/bloomingdale.png";
import samsung from "../img/affiliate-images/samsung.png";
import jcpenney from "../img/affiliate-images/jcpenney.png";

const AffiliateStores = () => {
  return (
    <section id="affiliate-stores">
      <h1 id="affiliate-title">
        Shop Sustainably at <br></br>10,000+ stores!
      </h1>
      <img className="store-lg" id="nike" src={nike}></img>
      <img className="store-md" id="flowers" src={flowers}></img>
      <img className="store-md" id="colehaan" src={colehaan}></img>
      <img className="store-lg" id="overstock" src={overstock}></img>
      <img className="store-md" id="microsoft" src={microsoft}></img>
      <img className="store-lg" id="expedia" src={expedia}></img>
      <img className="store-md" id="glossier" src={glossier}></img>
      <img className="store-md" id="bloomingdale" src={bloomingdale}></img>
      <img className="store-lg" id="samsung" src={samsung}></img>
      <img className="store-md" id="jcpenney" src={jcpenney}></img>
    </section>
  );
};

export default AffiliateStores;
