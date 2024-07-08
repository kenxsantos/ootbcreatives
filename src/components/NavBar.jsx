import React from "react";

const NavBar = () => {
  return (
    <nav className="max-w-screen-2xl px-20">
      <div className="text-white flex justify-evenly items-center font-jost text-md">
        <section>SERVICES</section>
        <section>SERVICES</section>
        <section className="flex flex-col leading-none">
          <span>CLIENTS</span>
          <span>ONBOARD</span>
        </section>
        <section>CREWWMATES</section>
        <section className="flex flex-col leading-none">
          <span>OOTB</span>
          <span>ACADEMY</span>
        </section>
        <section>CAREERS</section>
        <section>RESOURCES</section>
        <section>RADIO US</section>
      </div>
    </nav>
  );
};

export default NavBar;
