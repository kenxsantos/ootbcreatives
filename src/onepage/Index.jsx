import React, { useState } from "react";
import MegaScroll from "react-mega-scroll";

import NavBar from "../components/NavBar";
import Landing from "./Landing";
import Service from "./Service";
import Clients from "./Clients";
import Crewmates from "./Crewmates";
import Offers from "./Offers";
import RadioUs from "./RadioUs";

const Index = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <NavBar />
      <MegaScroll onChange={setActive}>
        <div id="landing" className="h-full w-full">
          <Landing />
        </div>
        <div id="services" className="h-full w-full relative z-30">
          <Service />
        </div>
        <div id="clients" className="h-full w-full relative z-40">
          <Clients />
        </div>
        <div id="crewmates" className="h-full w-full relative z-50">
          <Crewmates />
        </div>
        <div id="academy" className="h-full w-full relative z-[60]">
          <div id="careers"></div>
          <div id="resources"></div>
          <Offers />
        </div>
        <div id="radio" className="h-full w-full relative z-[70]">
          <RadioUs />
        </div>
      </MegaScroll>
    </>
  );
};

export default Index;
