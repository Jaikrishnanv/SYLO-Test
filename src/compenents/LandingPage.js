import React from "react";
import Banner from "./Banner";
import "../App.css"
import "./landingPage.css"; 


<h1>SYLO APP </h1>

const LandingPage = () => {
  return (
    <div>
      
<h1>Welcome to our Swiggy Clone App!</h1>
      <section className="landing-banners">
        <Banner />
      </section>
    </div>
  );
};

export default LandingPage;