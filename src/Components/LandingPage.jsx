import React from "react";
import { BottomFooter } from "./BottomFooter";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navigation/>
        <Hero />
        <BottomFooter />
      </div>
    </>
  );
};

export default LandingPage;
