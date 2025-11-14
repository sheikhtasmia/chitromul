import React from "react";
import Banner from "./Banner";
import Speacialist from "./Speacialist";
import OurDedication from "./OurDedication";
import OurCreativity from "./OurCreativity";
import LatestWork from "./LatestWork";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "../Services/FAQSection";
// import PackagesSection from './PackagesSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Speacialist></Speacialist>
      <OurDedication></OurDedication>
      <OurCreativity></OurCreativity>
      <LatestWork></LatestWork>
      <FAQSection></FAQSection>
      <TestimonialSection></TestimonialSection>
      {/* <PackagesSection></PackagesSection> */}
    </div>
  );
};

export default Home;
