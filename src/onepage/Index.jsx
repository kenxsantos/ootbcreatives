import React from "react";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
import Services from "./Services";
import Clients from "./Clients";

const Index = () => {
  return (
    <div>
      <NavBar />
      <Landing />
      <Services />
      <Clients />
    </div>
  );
};

export default Index;
